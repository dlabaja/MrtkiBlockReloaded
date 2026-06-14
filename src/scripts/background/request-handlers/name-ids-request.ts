import {getBackgroundContext} from "../../contexts/background-context";
import {IMessageNameIdsResponse} from "../../interfaces/messages";
import {MessageType} from "../../enums/message-type.enum";
import {Runtime} from "webextension-polyfill";
import Port = Runtime.Port;

export async function handleNameIdsRequest(port: Port) {
    const context = await getBackgroundContext();
    const message: IMessageNameIdsResponse = {
        type: MessageType.NameIds,
        nameIds: context.dataManager.nameIds
    };
    port.postMessage(message);
}