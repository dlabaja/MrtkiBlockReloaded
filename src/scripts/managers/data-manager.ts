import {getRandomItem} from "../utils/random-utils";
import {ConfigManager} from "./config-manager/config-manager.abstract";
import {DataFetchManager} from "./data-fetch-manager";
import {Data} from "../interfaces/data";
import {Initiable} from "../data-structures/initiable";

type MatchGroupId = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "to" | "ta" | "ten" | "ti" | "ty" | "te";

interface MatchGroup {
    groupId: MatchGroupId,
    matches: string[],
    prepositions: string[],
    replacements: string[]
}

export class DataManager extends Initiable {
    private readonly _configManager: ConfigManager;
    private readonly _dataFetchManager: DataFetchManager;
    private _data: Data[] = [];
    private _sixthCasePrepositions = ["O", "o", "V", "v", "Ve", "ve", "Na", "na", "Po", "po", "Při", "při"];
    private _secondCasePrepositions = ["Bez", "bez", "Do", "do", "Od", "od", "Z", "z", "U", "u"]
    public matches: string[] = [];
    public sourceToNameIds = new Map<string, string[]>();
    public namesToMatches = new Map<string, string[]>; // name: matches
    public replacements = new Map<string, string[]>(); // match: replacements

    constructor(configManager: ConfigManager, dataFetchManager: DataFetchManager) {
        super();
        this._configManager = configManager;
        this._dataFetchManager = dataFetchManager;
    }

    public async onInit() {
        this._data = this._dataFetchManager.data;
        this.replacements = new Map<string, string[]>();
        this.matches = [];
        
        for (const data of this._data) {
            const matchGroups = this.getMatchGroups(data);
            const matches = this.getMatches(matchGroups);
            if (!this.sourceToNameIds.get(data.sourceName)) {
                this.sourceToNameIds.set(data.sourceName, []);
            }
            this.sourceToNameIds.get(data.sourceName)!.push(data.name);
            this.namesToMatches.set(data.name, matches)
            this.matches.push(...matches);
            this.fillReplacements(matchGroups);
        }
    }

    public getRandomReplacement(match: string): string {
        const replacements = this.replacements.get(match);
        if (!replacements) {
            return match;
        }
        return getRandomItem(replacements) || match;
    }

    // dostane match, projde ignorovaná jména -> koukne do {name: match[]} slovníku, pokud dict[name].includes(match), pak se má ignorovat
    // šlo by to napsat líp, ale zatím to nechám tak
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

    private getMatchGroups(data: Data): MatchGroup[] {
        const result: MatchGroup[] = [];
        const entries = [...Object.entries(data.cases), ...Object.entries(data.adjectives ?? [])];
        for (const entry of entries) {
            const id = entry[0] as MatchGroupId;
            const _matches = entry[1].matches;
            const matches: string[] = [
                ..._matches,
                ...(data.matchUpperCase ? _matches.map(x => x.toUpperCase()) : []),
                ...(data.matchLowerCase ? _matches.map(x => x.toLowerCase()) : [])
            ]
            result.push({
                groupId: id,
                matches: matches,
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
        // to znamená že nejdřív projdou matche bez předložek (4, 3) a pak až ty s předložkama (2, 6); Duplikáty se vyfiltrují
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