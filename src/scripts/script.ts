import {getContext} from "./context";
import {Trie} from "./aho-corasick/trie";
import {DataManager} from "./managers/data-manager";

const excludedTags = new Set(["SCRIPT", "STYLE"]);

getContext().then(context => {
    const trie = context.trieManager.trie;
    context.domManager.traverseNodes(
        NodeFilter.SHOW_TEXT,
        filterNodes,
        (node) => replaceText(node, trie, context.dataManager)
    )
})

function filterNodes(node: Node) {
    const parent = node.parentNode;

    if (!node.textContent?.trim()) {
        return NodeFilter.FILTER_SKIP;
    }

    if (parent && excludedTags.has(parent.nodeName)) {
        return NodeFilter.FILTER_SKIP;
    }

    return NodeFilter.FILTER_ACCEPT;
}

function replaceText(node: Node, trie: Trie, dataManager: DataManager) {
    if (!node.textContent) {
        return;
    }

    const matches = trie.search(" " + node.textContent + ""); // mezery kvůli borderům
    let tempText = node.textContent;
    for (let match of matches) {
        tempText = node.textContent.replaceAll(match, getReplacement(match, dataManager));
    }
    node.textContent = tempText;
}

function getReplacement(match: string, dataManager: DataManager) {
    // match je bordered, replacement ho potřebuje unbordernout
    // to co vrátí replacement potřebuje znovu bordernout
    return `${match[0]}${dataManager.getRandomReplacement(match.slice(1, match.length - 1))}${match[match.length - 1]}`
}