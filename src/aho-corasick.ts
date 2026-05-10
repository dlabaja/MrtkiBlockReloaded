// k tomuhle algoritmu mě přivedl chatgpt někdy v 11 večer, napsal jsem si ho sám ale kdybych o něm nevěděl, musel bych použít regex
// na vstupu dostane strom slov = trie (viz dole) a text, pak jedním průchodem textu najde všechny výskyty slov
// původní aho-corasick je složitější a každý vrchol může ukazovat na jiný písmenko v mapě (v jiném branchi), tady to ale asi nebude potřeba

interface TrieNode {
    prevChar: char,
    char: char,
    next: Map<char, TrieNode>
    end: boolean
}


function buildTrie(words: string[]) {
    const root = newNode('\0', '\0');
    buildTrieNodes(words, [root], 0, Math.max(...words.map(m => m.length)));
    return root;
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