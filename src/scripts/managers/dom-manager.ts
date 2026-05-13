type NodeFilterValue = (typeof NodeFilter)[keyof typeof NodeFilter]

const excludedTags = new Set(["SCRIPT", "STYLE"]);

export class DomManager {
    public observerConfig = { attributes: false, childList: true, subtree: true };
    public processedNodes: Node[] = [];
    public processingNodes = false;
    
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
    
    public getNewObserver(onMutation: (node: Node) => void) {
        return new MutationObserver((mutations, observer) => observerCallback(mutations, onMutation));
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

function observerCallback(mutations: MutationRecord[], onMutation: (node: Node) => void) {
    for (const mutation of mutations) {
        if (mutation.target.nodeType == Node.TEXT_NODE) {
            onMutation(mutation.target);
        }
    }
}
