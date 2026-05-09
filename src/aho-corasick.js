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

function newNode(charContent) {
    return {
        content: charContent,
        next: new Set()
    }
}

function buildTrieTree(matches) {
    const root = newNode('\0');
    buildTrieNodes(matches, [root], 0, Math.max(...matches.map(m => m.length)));
    return root;
}

function buildTrieNodes(matches, prevNodes, index, stop) {
    if (index === stop) {
        return;
    }
    
    const chars = new Set();
    const nodes = []
    for (let i = 0; i < matches.length; i++) {
        if (index < matches[i].length) {
            chars.add(matches[i][index])
        }
    }
    
    // k čemu je sakra for-of, iteruju 3 struktury a potřebuju 3 druhy cyklů
    for (const char of chars) {
        nodes.push(newNode(char))
    }

    for (let i = 0; i < prevNodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
            prevNodes[i].next.add(nodes[j])
        }
    }
    
    buildTrieNodes(matches, nodes, index + 1, stop)
}

const res = buildTrieTree(["she", "he", "him"])
console.log()