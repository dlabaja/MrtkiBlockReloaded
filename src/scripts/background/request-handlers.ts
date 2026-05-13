import {IMessageReplace, IMessageReplaceContent} from "../interfaces/messages";
import {BackgroundContext, getBackgroundContext} from "../contexts/background-context";
import {pad, ZWSP} from "../utils/string-utils";

export async function handleReplaceRequest(message: IMessageReplace) {
    const context = await getBackgroundContext();
    for (const content of message.content) {
        processText(content, context);
    }
    
    return message
}

function processText(content: IMessageReplaceContent, context: BackgroundContext): void {
    if (!content.text) {
        return;
    }
    
    let tempText = pad(content.text, `${ZWSP}${ZWSP}`);
    const matches = context.trieManager.trie.search(tempText);
    if (!matches.length) {
        return;
    }

    for (let match of matches) {
        tempText = tempText.replaceAll(match, context.trieManager.getRandomReplacement(match));
    }
    
    content.text = tempText;
    content.changed = true;
    return;
}