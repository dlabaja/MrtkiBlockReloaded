import browser from "webextension-polyfill";
import {processResponse} from "./router";
import {IMessageReplaceContent, Message} from "../interfaces/messages";
import {getContentScriptContext} from "../contexts/content-script-context";

const port = browser.runtime.connect();

function init() {
    port.onMessage.addListener((m) => {
        processResponse(m as Message)
    })
}

function updateNodes(nodes: Node[]) {
    const context = getContentScriptContext();
    const content: IMessageReplaceContent[] = [];
    for (const [index, node] of nodes.entries()) {
        content.push(nodeToObject(node, index));
    }
    context.domManager.processedNodes = nodes;
    context.domManager.processingNodes = true;
    port.postMessage(content);
    // zbytek je v response handleru
}

function nodeToObject(node: Node, index: number): IMessageReplaceContent {
    return {
        id: index,
        text: node.textContent || "",
        changed: false
    }
}