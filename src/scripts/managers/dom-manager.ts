import {ProcessedNode} from "../interfaces/processed-node";

const excludedTags = new Set(["SCRIPT", "STYLE"]);

export class DomManager {
    public observerConfig = { attributes: false, childList: true, subtree: true };
    public processedNodes: ProcessedNode[] = [];
    public processingNodes = false;
    private _observers: MutationObserver[] = [];
    
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
    
    public startNewObserver(target: Node, onDebounce: () => void) {
        let timer: ReturnType<typeof setTimeout>; // návratový typ funkce, teď je to multiplatformní
        const observer = new MutationObserver(() => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                onDebounce();
            }, 1000);
        })
        observer.observe(target, this.observerConfig);
        this._observers.push(observer);
    }
    
    public clearObservers() {
        for (const observer of this._observers) {
            observer.disconnect();
        }
        this._observers = [];
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
