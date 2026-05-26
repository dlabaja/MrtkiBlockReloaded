import {DataManager} from "./data-manager";
import {Trie} from "../aho-corasick/trie";
import {firstChar, lastChar, NBSP, trimOne, ZWSP} from "../utils/string-utils";

export class TrieManager {
    private _dataManager: DataManager;
    private _boundaries = [" ", ".", ",", ":", "!", "?", "„", "“", "\"", "\n", "\t", NBSP, ZWSP];
    public trie: Trie;

    constructor(dataManager: DataManager) {
        this._dataManager = dataManager;
        this.trie = new Trie(this.borderedMatches(this._dataManager.matches, this._boundaries));
    }
    
    public getRandomReplacement(borderedMatch: string) {
        const prefix = firstChar(borderedMatch);
        const suffix = lastChar(borderedMatch);
        const content = trimOne(borderedMatch);
        const replacement = this._dataManager.getRandomReplacement(content);
        return `${prefix}${replacement}${suffix}`
    }
    
    private borderedMatches(matches: string[], boundaries: string[]) {
        const res = [];
        for (const prefix of boundaries) {
            for (const suffix of boundaries) {
                for (const match of matches) {
                    res.push(`${prefix}${match}${suffix}`);
                }
            }
        }
        return res;
    }
}