import {Runtime} from "webextension-polyfill";
import {getBackgroundContext} from "../../contexts/background-context";
import {IMessageErrors} from "../../interfaces/messages";
import {MessageType} from "../../enums/message-type.enum";
import Port = Runtime.Port;

export async function handleErrorsRequest(port: Port) {
    const context = await getBackgroundContext();
    const message: IMessageErrors = {
        type: MessageType.Errors,
        errors: context.errorManager.errors
    }
    port.postMessage(message)
}