export class TrieNode {
    public readonly char: char;
    public readonly next: Map<char, TrieNode>;
    public readonly prev: TrieNode;
    public readonly isEnd: boolean;
    
    constructor(char: char, prev: TrieNode, isEnd: boolean) {
        this.char = char;
        this.next = new Map();
        this.prev = prev;
        this.isEnd = isEnd;
    }
}