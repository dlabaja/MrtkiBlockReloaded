import {IMessageReplace} from "../../interfaces/messages";
import {getContentScriptContext} from "../../contexts/content-script-context";
import {ProcessedNode} from "../../interfaces/processed-node";

export async function handleReplaceResponse(message: IMessageReplace) {
    const context = await getContentScriptContext();
    const config = context.configManager.config;
    if (!context.domManager.processingNodes) {
        return;
    }

    const nodes = context.domManager.processedNodes;
    for (const item of message.content.filter(x => x.changed)) {
        const node = item.id < nodes.length ? nodes[item.id] : null;
        if (!node || !canReplace(node)) {
            continue;
        }

        const original = node.textContent;
        node.hasReplacedText = true;
        node.textContent = item.text;
        if (node.parentElement && original && !config.disableTooltips) {
            node.parentElement.title = node.parentElement.innerText;
        }
    }

    context.domManager.processedNodes = [];
    context.domManager.processingNodes = false;
}

function canReplace(node: ProcessedNode): boolean {
    if (!node || !node.isConnected || node.hasReplacedText) {
        return false;
    }

    if (node.originalParentNode != node.parentNode || node.originalTextContent != node.textContent) {
        return false;
    }
    
    if (node.parentElement?.tagName == "textarea") {
        return false;
    }
    
    return true;
}