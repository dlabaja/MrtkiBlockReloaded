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

type MatchGroupId = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "to" | "ta" | "ten" | "ti" | "ty" | "te";

interface MatchGroup {
    groupId: MatchGroupId
    matches: string[]
    prepositions: string[],
    replacements: string[]
}

export class DataManager {
    private readonly _storageManager: StorageManager;
    private readonly _configManager: ConfigManager;
    private _data: Data[] = [];
    private _sixthCasePrepositions = ["O", "o", "V", "v", "Ve", "ve", "Na", "na", "Po", "po", "Při", "při"];
    private _secondCasePrepositions = ["Bez", "bez", "Do", "do", "Od", "od", "Z", "z", "U", "u"]
    public nameIds: string[] = [];
    public matches: string[] = [];
    public namesToMatches = new Map<string, string[]>; // name: matches:
    public replacements = new Map<string, string[]>(); // match: replacements

    constructor(storageManager: StorageManager, configManager: ConfigManager) {
        this._storageManager = storageManager;
        this._configManager = configManager;
    }

    public async init() {
        this._data = await this.getData();
        this.replacements = new Map<string, string[]>();
        this.nameIds = [];
        this.matches = [];

        for (const data of this._data) {
            const matchGroups = this.getMatchGroups(data);
            const matches = this.getMatches(matchGroups);
            this.nameIds.push(data.name);
            this.namesToMatches.set(data.name, matches)
            this.matches.push(...matches);
            this.fillReplacements(matchGroups);
        }
    }

    public getRandomReplacement(match: string) {
        const replacements = this.replacements.get(match);
        if (!replacements) {
            return match;
        }
        return getRandomItem(replacements);
    }

    public isIgnoredMatch(match: string) {
        const ignoredNames = this._configManager.config?.ignoredNames || [];
        for (const ignoredName of ignoredNames) {
            const matches = this.namesToMatches.get(ignoredName);
            if (!matches) {
                continue;
            }
            if (matches.includes(match)) {
                return true;
            }
        }
        return false;
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

    private getMatchGroups(data: Data): MatchGroup[] {
        const result: MatchGroup[] = [];
        const entries = [...Object.entries(data.cases), ...Object.entries(data.adjectives)];
        for (const entry of entries) {
            const id = entry[0] as MatchGroupId;
            result.push({
                groupId: id,
                matches: entry[1].matches,
                replacements: entry[1].replacements,
                prepositions: this.getPrepositions(id)
            })
        }
        return result;
    }

    private getPrepositions(id: MatchGroupId) {
        if (id === "2") {
            return this._secondCasePrepositions;
        }
        if (id === "6") {
            return this._sixthCasePrepositions;
        }
        return [];
    }

    private getWithPrepositions(words: string[], prepositions: string[]) {
        const result = [];
        for (const preposition of prepositions) {
            result.push(...words.map(word => `${preposition} ${word}`))
        }
        return result;
    }

    private getMatches(matchGroups: MatchGroup[]): string[] {
        const result = new Set<string>();
        for (const matchGroup of matchGroups) {
            const matchesWithPreps: string[] = [...matchGroup.matches, ...this.getWithPrepositions(matchGroup.matches, matchGroup.prepositions)];
            for (const matchWithPrep of matchesWithPreps) {
                result.add(matchWithPrep);
            }
        }
        return [...result];
    }

    private fillReplacements(matchGroups: MatchGroup[]) {
        // 4. pád se plní první kvůli konfliktům s 2. pádem. U 3./6. pádu už to je v pořádku
        const _matchGroups: MatchGroup[] = [
            matchGroups.find(x => x.groupId === "4")!,
            ...matchGroups.filter(x => x.groupId !== "4"),
        ]
        for (const matchGroup of _matchGroups) {
            for (const match of matchGroup.matches) {
                if (!this.replacements.has(match)) {
                    this.replacements.set(match, matchGroup.replacements);
                }
                for (const prep of matchGroup.prepositions) {
                    const matchWithPrep = `${prep} ${match}`;
                    if (!this.replacements.has(matchWithPrep)) {
                        this.replacements.set(matchWithPrep, matchGroup.replacements.map(x => `${prep} ${x}`));
                    }
                }
            }
        }
    }
}