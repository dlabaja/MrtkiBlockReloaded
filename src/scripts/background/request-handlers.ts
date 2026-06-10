import {IMessageNameIdsResponse, IMessageReplace, IMessageReplaceContent} from "../interfaces/messages";
import {BackgroundContext, getBackgroundContext} from "../contexts/background-context";
import {pad, trimOne, ZWSP} from "../utils/string-utils";
import {Runtime} from "webextension-polyfill";
import {MessageType} from "../enums/message-type.enum";
import Port = Runtime.Port;

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
    const matches = context.trieManager.trie.search(tempText).sort((a, b) => b.length - a.length); // delší stringy mají prioritu
    if (!matches.length) {
        return;
    }

    for (let match of matches) {
        if (context.dataManager.isIgnoredMatch(trimOne(match))) {
            continue;
        }
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

export async function handleNameIdsRequest(port: Port) {
    const context = await getBackgroundContext();
    const message: IMessageNameIdsResponse = {
        type: MessageType.NameIds,
        nameIds: context.dataManager.nameIds
    };
    port.postMessage(message);
}