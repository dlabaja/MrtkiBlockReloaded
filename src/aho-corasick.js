// k tomuhle algoritmu mě přivedl chatgpt někdy v 11 večer, napsal jsem si ho sám ale kdybych o něm nevěděl, musel bych použít regex

/*
matches = he, she, him
boundaries = ., !
trie =
    . -> h -> e -> .*
              i -> m -> .*
         s -> h -> e -> .*
    ! -> ... -> .*
    . -> ... -> !*
    ! -> ... -> !*
*/
export function buildTrie(matches, boundaries) {
    matches = borderedMatches(matches, boundaries)
}

function borderedMatches(matches, boundaries) {
    const res = [];
    for (const prefix in boundaries) {
        for (const postfix in boundaries) {
            for (const match in matches) {
                res.push(`${prefix}${match}${postfix}`);
            }
        }
    }
    return res;
}

function newNode(prevChar, char) {
    return {
        prevChar: prevChar,
        char: char,
        next: new Set()
    }
}

function buildTrieTree(matches) {
    const root = newNode('\0', '\0');
    buildTrieNodes(matches, [root], 0, Math.max(...matches.map(m => m.length)));
    return root;
}

function buildTrieNodes(matches, prevNodes, index, stop) {
    if (index === stop) {
        return;
    }
    
    const charMap = new Map(); // prevChar, new Set()
    const nodes = []
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i]
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
                prevNodes[i].next.add(nodes[j])
            }
        }
    }
    
    buildTrieNodes(matches, nodes, index + 1, stop)
}

const res = buildTrieTree(["she", "he", "him"])
console.log()