export class TrieNode {
    public readonly char: char;
    public readonly next: Map<char, TrieNode>;
    public readonly failureLinks: Map<char, TrieNode>;
    public failureLinksInit = false;
    public prev: TrieNode|null;
    public readonly isEnd: boolean;
    
    constructor(char: char, prev: TrieNode|null, isEnd: boolean) {
        this.char = char;
        this.next = new Map();
        this.failureLinks = new Map();
        this.prev = prev;
        this.isEnd = isEnd;
    }
}