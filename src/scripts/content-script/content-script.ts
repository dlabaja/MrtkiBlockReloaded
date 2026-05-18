import {processResponse} from "./router";
import {IMessageReplaceContent, Message} from "../interfaces/messages";
import {getContentScriptContext} from "../contexts/content-script-context";
import {MessageType} from "../enums/message-type.enum";

async function init() {
    const context = await getContentScriptContext();
    context.connectionManager.port.onMessage.addListener(async (m) => {
        await processResponse(m as Message)
    })
    context.domManager.startNewObserver(document.body, execute)
    await execute();
}

async function execute() {
    const context = await getContentScriptContext();
    const nodes: Node[] = [];
    context.domManager.traverseNodes(node => {
        // zabraňuje nekonečným matchům -> [Babiš := Stbák Babiš] -> Stbák [Babiš := Stbák Babiš] -> Stbák Stbák Stbák ... Babiš
        if ((node as ProcessedNode).hasReplacedText) {
            return;
        }
        nodes.push(node);
    })
    await updateNodes(nodes)
}

async function updateNodes(nodes: ProcessedNode[]) {
    const context = await getContentScriptContext();
    const content: IMessageReplaceContent[] = [];
    for (const [index, node] of nodes.entries()) {
        node.hasReplacedText = false;
        content.push(nodeToObject(node, index));
    }
    context.domManager.processedNodes = nodes;
    context.domManager.processingNodes = true;
    context.connectionManager.postMessage({
        type: MessageType.Replace,
        content: content
    })
    // zbytek je v response handleru
}

function nodeToObject(node: Node, index: number): IMessageReplaceContent {
    return {
        id: index,
        text: node.textContent || "",
        changed: false
    }
}

(async () => {
    await init()
})()