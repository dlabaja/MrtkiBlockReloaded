import {TrieNode} from "./trie-node";

export const EMPTY = "";

export class Trie {
    public readonly root = new TrieNode(EMPTY, null, false);
    public readonly words: string[];

    constructor(words: string[]) {
        this.root.prev = this.root;
        this.words = words;
        this.buildTrie(words)
    }
    
    public search(text: string) {
        const result: string[] = [];
        this.searchRec(text, this.root, 0, [], result);
        return result;
    }
    
    private searchRec(text: string, node: TrieNode, index: number, ir: char[], result: string[]) {
        if (index >= text.length) {
            return;
        }
        
        const char = text[index];
        let nextNode = node.next.get(char);

        if (node.isEnd) {
            result.push(ir.join(""));
            ir = [];
        }
        
        if (!nextNode) { // jdu do failure linku
            nextNode = node.failureLinks.get(char);
            if (!nextNode) { // jdu do rootu
                this.searchRec(text, this.root, index + 1, [], result);
                return;
            }
            ir = [...this.longestSuffixInTree(this.suffixes(node))];
            this.searchRec(text, nextNode, index + 1, ir, result);
            return;
        }

        this.searchRec(text, nextNode, index + 1, ir, result)
    }
    
    // root->C->A->T -> [CAT, AT, T, EMPTY]
    private suffixes(node: TrieNode) {
        const result: string[] = [];
        result.push(EMPTY);
        
        let currentNode = node;
        while (currentNode != this.root) {
            if (!result.length) {
                result.push(currentNode.char);
            }
            else {
                result.push(result[result.length - 1] + currentNode.char);
            }
            currentNode = currentNode.prev!;
        }
        
        return result.map(r => r.split("").reverse().join("")).reverse();
    }
    
    // projde od rootu strom a checkne jestli je tam suffix
    private containsSuffix(suffix: string, node: TrieNode, index: number): boolean {
        if (suffix == EMPTY) {
            return true;
        }
        
        if (index == suffix.length - 1) {
            return true;
        }
        
        let next = node.next.get(suffix[index])
        if (!next) {
            return false;
        }
        
        return this.containsSuffix(suffix, next, index + 1);
    }
    
    private longestSuffixInTree(suffixes: string[]) {
        for (const suffix of suffixes) {
            if (this.containsSuffix(suffix, this.root, 0)) {
                return suffix;
            }
        }
        return EMPTY; // nemělo by se stát
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
    
    private buildTrie(words: string[]) {
        for (const word of words) {
            this.addWord(word, this.root, 0);
        }

        /*this.traverseNodes(this.root, (node) => {
            node.failureLinks.set(EMPTY, this.root)
        })*/
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
}