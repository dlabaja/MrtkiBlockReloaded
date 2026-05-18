import {IMessageReplace} from "../interfaces/messages";
import {getContentScriptContext} from "../contexts/content-script-context";

export async function handleReplaceResponse(message: IMessageReplace) {
    const context = await getContentScriptContext();
    const config = context.configManager.config!;
    if (!context.domManager.processingNodes) {
        return;
    }
    
    const nodes = context.domManager.processedNodes;
    for (const item of message.content.filter(x => x.changed)) {
        const node = item.id < nodes.length ? nodes[item.id] : null;
        if (!node || node.hasReplacedText) {
            continue;
        }
        
        const original = node.textContent;
        node.hasReplacedText = true;
        node.textContent = item.text;
        if (node.parentElement && original && !config.disableTooltips) {
            node.parentElement.title = original.trim();
        }
    }
    
    context.domManager.processedNodes = [];
    context.domManager.processingNodes = false;
}
