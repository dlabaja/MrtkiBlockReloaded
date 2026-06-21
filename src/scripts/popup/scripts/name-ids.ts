import {getPopupContext} from "../../contexts/popup-context";
import {IMessage} from "../../interfaces/messages";
import {MessageType} from "../../enums/message-type.enum";
import {NameIdsWithSource} from "../../interfaces/name-ids-with-source";

const element = document.getElementById("loadedNames")!;

getPopupContext().then(async (context) => {
    context.connectionManager.postMessage<IMessage>({
        type: MessageType.NameIds
    });
})

export function updateNameIds(nameIdsWithSources: NameIdsWithSource[]) {
    const result = [];
    for (const nameIdWithSource of nameIdsWithSources) {
        result.push(`${nameIdWithSource.sourceName}:
        ${nameIdWithSource.nameIds.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join(", ")}`)
    }
    if (!result.length) {
        return;
    }
    element.innerText = result.join("\n\n");
}