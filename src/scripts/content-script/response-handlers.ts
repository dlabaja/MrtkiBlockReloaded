import {IMessageReplace} from "../interfaces/messages";
import {getContentScriptContext} from "../contexts/content-script-context";

export function handleReplaceResponse(message: IMessageReplace) {
    const context = getContentScriptContext();
    if (!context.domManager.processingNodes) {
        return;
    }
    
    const nodes = context.domManager.processedNodes;
    for (const item of message.content.filter(x => x.changed)) {
        const node = item.id < nodes.length ? nodes[item.id] : null;
        if (!node || node.hasReplacedText) {
            continue;
        }
        
        node.hasReplacedText = true;
        node.textContent = item.text;
    }
    
    context.domManager.processedNodes = [];
    context.domManager.processingNodes = false;
}

