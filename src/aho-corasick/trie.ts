import {TrieNode} from "./trie-node";

export const EMPTY = "\0";

export class Trie {
    public readonly root = new TrieNode(EMPTY, EMPTY, false);
    public readonly words: string[];

    constructor(words: string[]) {
        this.words = words;
        this.buildTrieNodes(words, [this.root], 0, Math.max(...words.map(m => m.length)))
        this.traverseNodes(this.root, (node) => {
            node.next.set(EMPTY, this.root)
        })
    }

    private buildTrieNodes(words: string[], prevNodes: TrieNode[], index: number, stop: number) {
        if (index === stop) {
            return;
        }

        const prevCharMap = new Map<char, Set<char>>();
        const nodes: TrieNode[] = []
        for (let i = 0; i < words.length; i++) {
            const match = words[i]
            const prevChar = index === 0 ? '\0' : match[index - 1];
            if (!prevCharMap.has(prevChar)) {
                prevCharMap.set(prevChar, new Set())
            }

            if (index < match.length) {
                prevCharMap.get(prevChar)!.add(match[index])
            }
        }

        for (const [prevChar, chars] of prevCharMap.entries()) {
            for (const char of chars) {
                const node = new TrieNode(char, prevChar, false);
                nodes.push(node);
            }
        }

        for (let i = 0; i < prevNodes.length; i++) {
            for (let j = 0; j < nodes.length; j++) {
                if (prevNodes[i].char === nodes[j].prevChar) {
                    prevNodes[i].next.set(nodes[j].char, nodes[j])
                }
            }
        }

        this.buildTrieNodes(words, nodes, index + 1, stop)
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