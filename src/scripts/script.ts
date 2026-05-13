import {getContext} from "./context";
import {Trie} from "./aho-corasick/trie";
import {TrieManager} from "./managers/trie-manager";
import {lastChar, pad, trimOne, ZWSP} from "./utils/string-utils";

getContext().then(context => {
    const trie = context.trieManager.trie;
    context.domManager.traverseNodes(
        (node) => replaceText(node, trie, context.trieManager)
    )
})

function replaceText(node: Node, trie: Trie, trieManager: TrieManager) {
    if (!node.textContent) {
        return;
    }
    
    if (!trie.trieBuilt) {
        return;
    }

    let tempText =  pad(node.textContent, `${ZWSP}${ZWSP}`);
    const matches = trie.search(tempText); // mezery kvůli borderům
    for (let match of matches) {
        tempText = tempText.replaceAll(match, trieManager.getRandomReplacement(match));
    }
    node.textContent = tempText;
}