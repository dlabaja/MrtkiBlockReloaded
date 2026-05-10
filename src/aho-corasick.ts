// k tomuhle algoritmu mě přivedl chatgpt někdy v 11 večer, napsal jsem si ho sám ale kdybych o něm nevěděl, musel bych použít regex
// na vstupu dostane strom slov = trie (viz dole) a text, pak jedním průchodem textu najde všechny výskyty slov
// původní aho-corasick je složitější a každý vrchol může ukazovat na jiný písmenko v mapě (v jiném branchi), tady to ale asi nebude potřeba

type char = string; // alias

interface TrieNode {
    prevChar: char,
    char: char,
    next: Map<char, TrieNode>
}

function newNode(prevChar: char, char: char): TrieNode {
    return {
        prevChar: prevChar,
        char: char,
        next: new Map()
    }
}

function buildTrie(words: string[]) {
    const root = newNode('\0', '\0');
    buildTrieNodes(words, [root], 0, Math.max(...words.map(m => m.length)));
    return root;
}

function buildTrieNodes(words: string[], prevNodes: TrieNode[], index: number, stop: number) {
    if (index === stop) {
        return;
    }
    
    const charMap = new Map(); // prevChar, new Set()
    const nodes = []
    for (let i = 0; i < words.length; i++) {
        const match = words[i]
        const prevChar = index === 0 ? '\0' : match[index - 1];
        if (!charMap.has(prevChar)) {
            charMap.set(prevChar, new Set())
        }
        
        if (index < match.length) {
            charMap.get(prevChar).add(match[index])
        }
    }
    
    // k čemu je sakra for-of, iteruju 3 struktury a potřebuju 3 druhy cyklů
    for (const [prevChar, chars] of charMap.entries()) {
        for (const char of chars) {
            nodes.push(newNode(prevChar, char))
        }
    }

    for (let i = 0; i < prevNodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
            if (prevNodes[i].char === nodes[j].prevChar) {
                prevNodes[i].next.set(nodes[j].char, nodes[j])
            }
        }
    }
    
    buildTrieNodes(words, nodes, index + 1, stop)
}

export function search(trie: TrieNode, text: string) {
    const res: string[] = [];
    searchRec(trie, trie, text, 0, [], res)
    return res;
}

function searchRec(trie: TrieNode, currentNode: TrieNode, text: string, index: number, ir: char[], results: string[]) {
    if (index >= text.length) {
        return;
    }

    const char = text[index];
    var nextNode = currentNode.next.get(char);

    // jsem v rootu a nic jsem nenašel, jdu na další index
    if (!nextNode && trie == currentNode) {
        searchRec(trie, trie, text, index + 1, [], results);
        return;
    }

    // slovo nevznikne, jdu do rootu a zkusím začít od první nody -> podmínka 1 
    if (!nextNode) {
        searchRec(trie, trie, text, index, [], results);
        return;
    }
    
    ir.push(char);
    
    // jsem na konci slova
    if (!currentNode.next.size) {
        results.push(ir.join(""));
        searchRec(trie, nextNode, text, index + 1, [], results);
        return;
    }

    searchRec(trie, nextNode, text, index + 1, ir, results);
}