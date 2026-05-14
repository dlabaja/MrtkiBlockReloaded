import {IMessageConfigChanged, IMessageReplace, IMessageReplaceContent} from "../interfaces/messages";
import {BackgroundContext, getBackgroundContext} from "../contexts/background-context";
import {pad, ZWSP} from "../utils/string-utils";
import { Runtime } from "webextension-polyfill";

export async function handleReplaceRequest(message: IMessageReplace, port: Runtime.Port) {
    const context = await getBackgroundContext();
    for (const content of message.content) {
        processText(content, context);
    }
    
    port.postMessage(message);
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
}

export async function handleConfigChangedRequest() {
    const context = await getBackgroundContext();
    await context.configManager.loadConfig();
    return;
}