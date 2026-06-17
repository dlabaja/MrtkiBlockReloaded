import {DataManager} from "./data-manager";
import {Trie} from "../data-structures/aho-corasick/trie";
import {firstChar, lastChar, NBSP, pad, trimOne, ZWSP} from "../utils/string-utils";
import {Initiable} from "../data-structures/initiable";

export class TrieManager extends Initiable {
    private _dataManager: DataManager;
    private _boundaries = new Set([" ", ".", ",", ";", ":", "!", "?", "„", "“", "'", "\"",
        "(", ")", "[", "]", "{", "}",
        "\n", "\t", NBSP, ZWSP]);
    private _trie: Trie | null = null;

    constructor(dataManager: DataManager) {
        super();
        this._dataManager = dataManager;
    }

    public async onInit() {
        this._trie = new Trie(this._dataManager.matches);
    }

    public getRandomReplacement(borderedMatch: string) {
        const prefix = firstChar(borderedMatch);
        const suffix = lastChar(borderedMatch);
        const content = trimOne(borderedMatch);
        const replacement = this._dataManager.getRandomReplacement(content);
        return `${prefix}${replacement}${suffix}`
    }

    public search(paddedText: string, paddedOutput: boolean): string[] {
        return this._trie?.search(paddedText)
                .filter(x => this._boundaries.has(x.charBeforeStart || ZWSP) && this._boundaries.has(x.charAfterEnd || ZWSP))
                .map(x => paddedOutput 
                    ? `${x.charBeforeStart ?? ""}${x.content}${x.charAfterEnd ?? ""}` 
                    : x.content)
            ?? [];
    }
}