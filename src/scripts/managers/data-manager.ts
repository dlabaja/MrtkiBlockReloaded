import {getRandomItem} from "../utils/random-utils";
import {StorageManager} from "./storage-manager";
import {StorageKey} from "../enums/storage-key.enum";
import {StorageType} from "../enums/storage-type.enum";

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
    }
}

interface DataDeclension {
    matches: string[],
    replacements: string[]
}

export class DataManager {
    private readonly _storageManager: StorageManager;
    private _data: Data[] = [];
    public replacements = new Map<string, string[]>()
    public matches: string[] = [];
    
    constructor(storageManager: StorageManager) {
        this._storageManager = storageManager;
    }

    public async init() {
        this._data = await this.getData(this._storageManager);

        for (const data of this._data) {
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
    
    private async getData(storageManager: StorageManager) {
        let data = await storageManager.get<Data[]>(StorageType.Local, StorageKey.Data);
        if (data) {
            return data;
        }

        const response = await fetch(
            "https://raw.githubusercontent.com/dlabaja/MrtkiBlockReloaded/refs/heads/master/data/data.json");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        
        data = await response.json() as Data[];
        await storageManager.save(StorageType.Local, StorageKey.Data, data);
        return data;
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