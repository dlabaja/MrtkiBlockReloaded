import {processResponse} from "./router";
import {IMessageReplaceContent, Message} from "../interfaces/messages";
import {getContentScriptContext} from "../contexts/content-script-context";
import {MessageType} from "../enums/message-type.enum";
import {Config} from "../interfaces/config";
import {ProcessedNode} from "../interfaces/processed-node";

async function init() {
    const context = await getContentScriptContext();
    const config = context.configManager.config;
    if (!canRun(config)) {
        return;
    }

    context.connectionManager.port.onMessage.addListener(async (m) => {
        await processResponse(m as Message)
    });
    // po triggernutí observeru projde celou stránku znovu
    context.domManager.startNewObserver(document.body, execute);
    await execute();
}

function canRun(config: Config) {
    return !config.disableExtension
        && !config.ignoredWebsites.includes(window.location.hostname)
        && document.contentType === "text/html"
}

async function execute() {
    const context = await getContentScriptContext();
    const nodes: Node[] = [];
    context.domManager.traverseNodes((node: ProcessedNode) => {
        // zabraňuje nekonečným matchům -> [Babiš := Stbák Babiš] -> Stbák [Babiš := Stbák Babiš] -> Stbák Stbák Stbák ... Babiš
        // pokud je false, znamená to že už se zpracovává
        if (node.hasReplacedText !== undefined) {
            return;
        }
        // ochrana před manipulací DOMu Reactem
        node.originalParentNode = node.parentNode;
        node.originalTextContent = node.textContent;
        nodes.push(node);
    })
    const title = document.head.getElementsByTagName("title").item(0);
    if (title) {
        nodes.push(title)
    }
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