import {DataManager} from "./data-manager";
import {Trie, WILDCARD} from "../data-structures/aho-corasick/trie";
import {firstChar, lastChar, NBSP, trimOne, ZWSP} from "../utils/string-utils";
import {Initiable} from "../data-structures/initiable";

export class TrieManager extends Initiable {
    private _dataManager: DataManager;
    private _boundaries = new Set([" ", ".", ",", ";", ":", "!", "?", "„", "“", "'", "\"", "\n", "\t", NBSP, ZWSP]);
    private _trie: Trie|null = null;

    constructor(dataManager: DataManager) {
        super();
        this._dataManager = dataManager;
    }
    
    public async onInit() {
        this._trie = new Trie(this._dataManager.matches.map(x => `${WILDCARD}${x}${WILDCARD}`));
    }
    
    public getRandomReplacement(borderedMatch: string) {
        const prefix = firstChar(borderedMatch);
        const suffix = lastChar(borderedMatch);
        const content = trimOne(borderedMatch);
        const replacement = this._dataManager.getRandomReplacement(content);
        return `${prefix}${replacement}${suffix}`
    }
    
    public search(text: string) : string[] {
        return this._trie?.search(text)
            .filter(x => this._boundaries.has(firstChar(x)) && this._boundaries.has(lastChar(x))) ?? [];
    }
}