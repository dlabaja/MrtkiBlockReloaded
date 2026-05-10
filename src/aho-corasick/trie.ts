import {TrieNode} from "./trie-node";

export const EMPTY = "\0";

export class Trie {
    public readonly root = new TrieNode(EMPTY, null, false);
    public readonly words: string[];

    constructor(words: string[]) {
        this.root.prev = this.root;
        this.words = words;
        this.buildTrie(words)
        this.traverseNodes(this.root, (node) => {
            node.next.set(EMPTY, this.root)
        })
    }
    
    private buildTrie(words: string[]) {
        for (const word of words) {
            this.addWord(word, this.root, 0);
        }
    }
    
    private addWord(word: string, prevNode: TrieNode, index: number) {
        if (index >= word.length) {
            return
        }
        
        const char = word[index];
        const isEnd = index == word.length - 1;
        let node = prevNode.next.get(char);
        if (!node) {
            node = new TrieNode(char, prevNode, isEnd);
            prevNode.next.set(char, node);
        }
        
        this.addWord(word, node, index + 1);
    }

    public traverseNodes(root: TrieNode, fun: (node: TrieNode) => void) {
        const visited = new Set<TrieNode>();
        this.traverseNodesRec(root, visited, fun);
    }

    private traverseNodesRec(node: TrieNode, visited: Set<TrieNode>, fun: (node: TrieNode) => void) {
        if (visited.has(node)) {
            return
        }
        
        fun(node);
        visited.add(node)
        for (const nextNode of node.next.values()) {
            this.traverseNodesRec(nextNode, visited, fun);
        }
    }
}