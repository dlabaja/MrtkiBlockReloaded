export class TrieNode {
    public char: char;
    public next: Map<char, TrieNode> = new Map();
    public failureLinks: Map<char, TrieNode> = new Map();
    public prev: TrieNode|null;
    public isEnd: boolean;
    constructor(char: char, prev: TrieNode|null, isEnd: boolean) {
        this.char = char;
        this.prev = prev;
        this.isEnd = isEnd;
    }
}