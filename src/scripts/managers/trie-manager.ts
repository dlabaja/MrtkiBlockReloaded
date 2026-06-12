import {DataManager} from "./data-manager";
import {Trie} from "../aho-corasick/trie";
import {firstChar, lastChar, NBSP, trimOne, ZWSP} from "../utils/string-utils";

export class TrieManager {
    private _dataManager: DataManager;
    private _boundaries = [" ", ".", ",", ";", ":", "!", "?", "„", "“", "'", "\"", "\n", "\t", NBSP, ZWSP];
    private trie: Trie;

    constructor(dataManager: DataManager) {
        this._dataManager = dataManager;
        this.trie = new Trie(this._dataManager.matches);
    }
    
    public getRandomReplacement(borderedMatch: string) {
        const prefix = firstChar(borderedMatch);
        const suffix = lastChar(borderedMatch);
        const content = trimOne(borderedMatch);
        const replacement = this._dataManager.getRandomReplacement(content);
        return `${prefix}${replacement}${suffix}`
    }
    
    public search(text: string) {
        return ["a"];
    }
}