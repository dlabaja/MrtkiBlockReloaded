export class TrieNode {
    public char: char;
    public next: Map<char, TrieNode>;
    public failureLinks: Map<char, TrieNode>;
    public prev: TrieNode|null;
    public isEnd: boolean;
    
    constructor(char: char, prev: TrieNode|null, isEnd: boolean) {
        this.char = char;
        this.next = new Map();
        this.failureLinks = new Map();
        this.prev = prev;
        this.isEnd = isEnd;
    }
}