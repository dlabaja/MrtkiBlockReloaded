import {getPopupContext} from "../../contexts/popup-context";
import {IMessage} from "../../interfaces/messages";
import {MessageType} from "../../enums/message-type.enum";

const element = document.getElementById("loadedNames")!;

getPopupContext().then(async (context) => {
    context.connectionManager.postMessage<IMessage>({
        type: MessageType.NameIds
    });
})

export function updateNameIds(nameIds: string[]) {
    element.innerText = nameIds.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join(", ");
}