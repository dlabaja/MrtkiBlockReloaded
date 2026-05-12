import {DataManager} from "./data-manager.js";
import {Trie} from "../aho-corasick/trie.js";

export class TrieManager {
    private _dataManager: DataManager;
    private _boundaries = [" ", ".", ",", "!", "?", "\n", "\t"];
    public trie: Trie;

    constructor(dataManager: DataManager) {
        this._dataManager = dataManager;
        this.trie = new Trie(this.borderedMatches(this._dataManager.matches, this._boundaries));
    }
    
    private borderedMatches(matches: string[], boundaries: string[]) {
        const res = [];
        for (const prefix of boundaries) {
            for (const postfix of boundaries) {
                for (const match of matches) {
                    res.push(`${prefix}${match}${postfix}`);
                }
            }
        }
        return res;
    }
}