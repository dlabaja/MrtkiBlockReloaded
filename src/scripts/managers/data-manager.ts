import {getRandomItem} from "../utils/random-utils";
import {StorageManager} from "./storage-manager";
import {StorageKey} from "../enums/storage-key.enum";
import {StorageType} from "../enums/storage-type.enum";
import {ConfigManager} from "./config-manager/config-manager.abstract";

export interface Data {
    name: string,
    cases: {
        1: DataDeclension,
        2: DataDeclension,
        3: DataDeclension,
        4: DataDeclension,
        5: DataDeclension,
        6: DataDeclension,
        7: DataDeclension,
    },
    adjectives: {
        to: DataDeclension,
        ta: DataDeclension,
        ten: DataDeclension,
        ti: DataDeclension,
        ty: DataDeclension,
        te: DataDeclension
    }
}

interface DataDeclension {
    matches: string[],
    replacements: string[]
}

export class DataManager {
    private readonly _storageManager: StorageManager;
    private readonly _configManager: ConfigManager;
    private _data: Data[] = [];
    public replacements = new Map<string, string[]>();
    public matches: string[] = [];
    public nameIds: string[] = [];
    
    constructor(storageManager: StorageManager, configManager: ConfigManager) {
        this._storageManager = storageManager;
        this._configManager = configManager;
    }

    public async init() {
        this._data = await this.getData();
        this.replacements = new Map<string, string[]>();
        this.matches = [];
        this.nameIds = [];

        for (const data of this._data) {
            this.nameIds.push(data.name);
            this.matches.push(...this.getMatches(data));
            this.fillReplacements(data);
        }
    }
    
    public getRandomReplacement(match: string) {
        const replacements = this.replacements.get(match);
        if (!replacements) {
            return match;
        }
        return getRandomItem(replacements);
    }
    
    private async getData() {
        // po každém spuštění aktualizuju databázi
        if (!this._configManager.config?.disableUpdates) {
            return await this.fetchData();
        }
        
        let data = await this._storageManager.get<Data[]>(StorageType.Local, StorageKey.Data);
        if (data) {
            return data;
        }

        data = await this.fetchData();
        await this._storageManager.save(StorageType.Local, StorageKey.Data, data);
        return data;
    }
    
    private async fetchData() {
        const response = await fetch(
            "https://raw.githubusercontent.com/dlabaja/MrtkiBlockReloaded/refs/heads/master/data/data.json");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        return await response.json() as Data[];
    }

    private getMatches(data: Data) {
        return [
            ...data.cases["1"].matches,
            ...data.cases["2"].matches,
            ...data.cases["3"].matches,
            ...data.cases["4"].matches,
            ...data.cases["5"].matches,
            ...data.cases["6"].matches,
            ...data.cases["7"].matches,
            ...data.adjectives.to.matches,
            ...data.adjectives.ta.matches,
            ...data.adjectives.ten.matches,
            ...data.adjectives.ti.matches,
            ...data.adjectives.ty.matches,
            ...data.adjectives.te.matches,
        ]
    }
    
    private fillReplacements(data: Data) {
        for (const item in data.cases) {
            // @ts-ignore
            for (const match of data.cases[item].matches) {
                if (this.replacements.has(match)) {
                    continue;
                }
                // @ts-ignore
                this.replacements.set(match, data.cases[item].replacements);
            }
        }

        for (const item in data.adjectives) {
            // @ts-ignore
            for (const match of data.adjectives[item].matches) {
                if (this.replacements.has(match)) {
                    continue;
                }
                // @ts-ignore
                this.replacements.set(match, data.adjectives[item].replacements);
            }
        }
    }
}