// k tomuhle algoritmu (aho-corasick) mě přivedl chatgpt někdy v 11 večer - napsal jsem si ho sám, ale kdybych o něm nevěděl, musel bych použít regex
// pomocí datové struktury Trie najde jedním průchodem všechny výskyty slov v textu

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

    private buildTrie(words: string[]) {
        for (const word of words) {
            this.addWord(word, this.root, 0);
        }

        this.traverseNodes(this.root, (node) => this.addFailureLinks(node))
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
    
    private addFailureLinks(node: TrieNode) {
        const longestSuffix = this.longestSuffixInTree(this.suffixes(node));
        const nextNode = this.findSubstring(longestSuffix, this.root);
        if (!nextNode) {
            return;
        }
        
        for (const [char, linkNode] of nextNode.next) {
            node.failureLinks.set(char, linkNode);
        }
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
        
        if (!nextNode) { // jdu do failure linku
            nextNode = node.failureLinks.get(char);
            if (!nextNode) { // jdu do rootu
                this.searchRec(text, this.root, index + 1, [], result);
                return;
            }
            ir = [...this.longestSuffixInTree(this.suffixes(node)) + char];
            this.searchRec(text, nextNode, index + 1, ir, result);
            return;
        }

        ir.push(char);
        if (node.isEnd) {
            result.push(ir.join(""));
            ir = [];
        }
        this.searchRec(text, nextNode, index + 1, ir, result)
    }
    
    // root->C->A->T -> [CAT, AT, T, EMPTY]
    private substrings(node: TrieNode) {
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
    
    private suffixes(node: TrieNode) {
        const substrings = this.substrings(node);
        if (substrings.length == 1) {
            return substrings;
        }
        return substrings.slice(1);
    }
    
    // projde od rootu strom a vrátí nalezený substring
    public findSubstring(substring: string, node: TrieNode) {
        return this.findSubstringRec(substring, node, 0);
    }
    
    public containsSubstring(substring: string, node: TrieNode) {
        return !!this.findSubstring(substring, node);
    }
    
    private findSubstringRec(substring: string, node: TrieNode, index: number): TrieNode|null {
        if (substring == EMPTY) {
            return this.root;
        }
        
        if (index == substring.length - 1) {
            return node;
        }
        
        let next = node.next.get(substring[index])
        if (!next) {
            return null; // jsem uprostřed stromu i substringu a dál už nemůžu
        }
        
        return this.findSubstringRec(substring, next, index + 1);
    }
    
    private longestSuffixInTree(suffixes: string[]) {
        for (const suffix of suffixes) {
            if (this.containsSubstring(suffix, this.root)) {
                return suffix;
            }
        }
        return EMPTY; // nemělo by se stát
    }

    // preorder - nejdřív volá fn() na node a pak jde do potomků
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