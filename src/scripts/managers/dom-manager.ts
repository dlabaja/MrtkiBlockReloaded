type NodeFilterValue = (typeof NodeFilter)[keyof typeof NodeFilter]

const excludedTags = new Set(["SCRIPT", "STYLE"]);

export class DomManager {
    public traverseNodes(fun: (node: Node) => void) {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    return filterNodes(node);
                }
            }
        );
        while (walker.nextNode()) {
            fun(walker.currentNode)
        }
    }
}

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
