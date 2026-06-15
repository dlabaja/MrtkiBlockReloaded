import {getPopupContext} from "../../contexts/popup-context";
import {ExtensionError} from "../../enums/error.enum";
import {ErrorManager} from "../../managers/error-manager";
import {IMessage} from "../../interfaces/messages";
import {MessageType} from "../../enums/message-type.enum";

const errorElem = document.getElementById("error")!;

getPopupContext().then(async (context) => {
    context.connectionManager.postMessage<IMessage>({
        type: MessageType.Errors
    });
})

export function updateErrors(errors: ExtensionError[]) {
    if (!errors.length) {
        return;
    }
    errorElem.innerText = `ERROR: ${errors.map(x => ErrorManager.getErrorMessage(x)).join("; ")}`;
}