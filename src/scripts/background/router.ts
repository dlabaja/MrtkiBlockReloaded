import {IMessageReplace, Message} from "../interfaces/messages";
import {MessageType} from "../enums/message-type.enum";
import {Runtime} from "webextension-polyfill";
import Port = Runtime.Port;
import {handleReplaceRequest} from "./request-handlers/replace-request";
import {handleConfigChangedRequest} from "./request-handlers/config-changed-request";
import {handleNameIdsRequest} from "./request-handlers/name-ids-request";

export async function processRequest(message: Message, port: Port): Promise<void> {
    switch (message.type) {
        case MessageType.Replace:
            await handleReplaceRequest(message as IMessageReplace, port);
            break;
        case MessageType.ConfigChanged:
            await handleConfigChangedRequest();
            break;
        case MessageType.NameIds:
            await handleNameIdsRequest(port);
            break;
    }
}