import {getContext} from "./context";
import {Trie} from "./aho-corasick/trie";
import {intersectsInterval, Interval} from "./utils/interval-utils";
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

    const matches = trie.search(node.textContent);
    const occupied: Interval[] = [];
    for (const match of matches) {
        const intervals = intervalsOf(match, node.textContent)
        for (const interval of intervals) {
            if (!intersectsInterval(interval.start, interval.end, occupied)) {
                node.textContent.replace(match, dataManager.getRandomReplacement(match))
            }
            occupied.push(interval);
        }
    }
}

function intervalsOf(word: string, text: string): Interval[] {
    const intervals: Interval[] = [];
    
    let current = 0;
    const len = word.length;
    let index = text.indexOf(word, current);
    while (index != -1) {
        current = index + len;
        intervals.push({
            start: index,
            end: current
        })
        index = text.indexOf(word, current);
    }
    return intervals;
}