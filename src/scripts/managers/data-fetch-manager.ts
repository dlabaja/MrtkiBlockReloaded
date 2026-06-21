import {ConfigManager} from "./config-manager/config-manager.abstract";
import {ErrorManager} from "./error-manager";
import {ExtensionError} from "../enums/error.enum";
import {Data, DataDeclension} from "../interfaces/data";
import {StorageType} from "../enums/storage-type.enum";
import {StorageKey} from "../enums/storage-key.enum";
import {Initiable} from "../data-structures/initiable";
import {StorageManager} from "./storage-manager";

export class DataFetchManager extends Initiable {
    private _storageManager: StorageManager;
    private _configManager: ConfigManager;
    private _errorManager: ErrorManager;
    private _data: Data[]|null = null;
    public static readonly defaultFetchUrl = "https://raw.githubusercontent.com/dlabaja/MrtkiBlockReloaded/refs/heads/master/data/data.json";
    
    constructor(storageManager: StorageManager, configManager: ConfigManager, errorManager: ErrorManager) {
        super();
        this._storageManager = storageManager;
        this._configManager = configManager;
        this._errorManager = errorManager;
    }

    protected async onInit(): Promise<void> {
        await this.loadData();
    }
    
    private async loadData(): Promise<void> {
        if (!this._configManager.config.disableUpdates) {
            this._data = await this.fetchData();
            return;
        }

        let data = await this._storageManager.get<Data[]>(StorageType.Local, StorageKey.Data);
        if (data) {
            this._data = data;
            return;
        }

        data = await this.fetchData();
        await this._storageManager.save(StorageType.Local, StorageKey.Data, data);
        this._data = data;
    }

    private async fetchData(): Promise<Data[]> {
        const links = this._configManager.config.dataSources || [DataFetchManager.defaultFetchUrl];
        const responses = await Promise.all(links.map(x => fetch(x)))
        if (!responses.every(x => x.ok)) {
            this._errorManager.addError(ExtensionError.DataFetchFailed);
            return [];
        }

        const jsons = await Promise.all(responses.map(x => x.json() as Promise<Data[]>));
        let validatedJsons: Data[][] = [];
        for (const json of jsons) {
            if (!this.validateJson(json)) {
                this.handleParseException()
                continue;
            }
            validatedJsons.push(json);
        }
        
        const usedNames = new Set<string>();
        const result: Data[] = [];
        try {
            for (const [index, json] of validatedJsons.entries()) {
                try {
                    for (const data of json) {
                        data.sourceName = `Zdroj #${index + 1}`;
                        data.name = this.getUniqueName(data.name, 0, usedNames);
                        usedNames.add(data.name);
                    }
                    result.push(...json);
                }
                catch (e) {
                    this.handleParseException();
                }
            }
        }
        catch (e) {
            this.handleParseException();
        }
        
        
        return result;
    }
    
    private handleParseException() {
        this._errorManager.addError(ExtensionError.DataParseFailed);
    }
    
    private validateJson(json: Data[]): boolean {
        let ir = Array.isArray(json);
        if (!ir) {
            return false;
        }
        for (const item of json) {
            ir = ir && this.validateDataJson(item);
        }
        return ir;
    }
    
    private validateDataJson(data: Data): boolean {
        let ir: boolean = !!data.name && data.matchLowerCase !== undefined && data.matchUpperCase !== undefined && !!data.cases
        for (const caseKey of [1, 2, 3, 4, 5, 6, 7]) {
            // @ts-ignore
            const caseItem: DataDeclension|undefined = data.cases[`${caseKey}`];
            ir = ir && caseItem !== undefined && caseItem.matches !== undefined && caseItem.replacements !== undefined;
        }
        return ir;
    }
    
    private getUniqueName(name: string, attempt: number, usedNames: Set<string>): string {
        const newName = attempt ? `${name}-${attempt}` : name;
        if (!usedNames.has(newName)) {
            return newName;
        }
        return this.getUniqueName(name, attempt + 1, usedNames);
    }
    
    public get data(): Data[] {
        return this._data || [];
    }
}