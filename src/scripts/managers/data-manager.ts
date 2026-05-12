import {getRandomItem} from "../utils/random-utils.js";
import {StorageManager} from "./storage-manager.js";
import {StorageKey} from "../enums/storage-key.enum.js";

export interface Data {
    name: string,
    cases: {
        1: DataCase,
        2: DataCase,
        3: DataCase,
        4: DataCase,
        5: DataCase,
        6: DataCase,
        7: DataCase,
    }
}

interface DataCase {
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
        if (!this._data.length) {
            throw new Error("Cannot fetch data");
        }

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
        const data = await storageManager.get<Data[]>(StorageKey.Data);
        if (data) {
            return data;
        }

        const response = await fetch(
            "https://raw.githubusercontent.com/dlabaja/MrtkiBlockReloaded/refs/heads/master/data/data.json");
        return await response.json() as Data[]
    }

    private getMatches(data: Data) {
        return [
            ...data.cases["1"].matches,
            ...data.cases["2"].matches,
            ...data.cases["3"].matches,
            ...data.cases["4"].matches,
            ...data.cases["5"].matches,
            ...data.cases["6"].matches,
            ...data.cases["7"].matches
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
    }
}