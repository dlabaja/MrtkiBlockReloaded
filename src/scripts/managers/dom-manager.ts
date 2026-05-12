type NodeFilterValue = (typeof NodeFilter)[keyof typeof NodeFilter]

export class DomManager {
    public traverseNodes(filter: NodeFilterValue, filterFun: (node: Node) => number, fun: (node: Node) => void) {
        const walker = document.createTreeWalker(
            document.body,
            filter,
            {
                acceptNode(node) {
                    return filterFun(node);
                }
            }
        );
        while (walker.nextNode()) {
            fun(walker.currentNode)
        }
    }
}

