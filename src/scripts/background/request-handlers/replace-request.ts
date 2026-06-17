import {IMessageReplace, IMessageReplaceContent} from "../../interfaces/messages";
import {Runtime} from "webextension-polyfill";
import {BackgroundContext, getBackgroundContext} from "../../contexts/background-context";
import {pad, trimOne, ZWSP} from "../../utils/string-utils";

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
    const matches = context.trieManager.search(tempText, true).sort((a, b) => b.length - a.length); // delší stringy mají prioritu
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