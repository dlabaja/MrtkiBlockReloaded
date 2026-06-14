import {DataManager} from "./data-manager";
import {Trie, WILDCARD} from "../data-structures/aho-corasick/trie";
import {firstChar, lastChar, NBSP, trimOne, ZWSP} from "../utils/string-utils";

export class TrieManager {
    private _dataManager: DataManager;
    private _boundaries = new Set([" ", ".", ",", ";", ":", "!", "?", "„", "“", "'", "\"", "\n", "\t", NBSP, ZWSP]);
    private _trie: Trie;

    constructor(dataManager: DataManager) {
        this._dataManager = dataManager;
        this._trie = new Trie(this._dataManager.matches.map(x => `${WILDCARD}${x}${WILDCARD}`));
    }
    
    public getRandomReplacement(borderedMatch: string) {
        const prefix = firstChar(borderedMatch);
        const suffix = lastChar(borderedMatch);
        const content = trimOne(borderedMatch);
        const replacement = this._dataManager.getRandomReplacement(content);
        return `${prefix}${replacement}${suffix}`
    }
    
    public search(text: string) {
        return this._trie.search(text)
            .filter(x => this._boundaries.has(firstChar(x)) && this._boundaries.has(lastChar(x)));
    }
}