import {IMessageConfigChanged, IMessageReplace, Message} from "../interfaces/messages";
import {MessageType} from "../enums/message-type.enum";
import {handleConfigChangedRequest, handleReplaceRequest} from "./request-handlers";
import {Runtime} from "webextension-polyfill";
import Port = Runtime.Port;

export async function processRequest(message: Message, port: Port): Promise<void> {
    switch (message.type) {
        case MessageType.Replace:
            await handleReplaceRequest(message as IMessageReplace, port);
            break;
        case MessageType.ConfigChanged:
            await handleConfigChangedRequest(message as IMessageConfigChanged);
            break;
    }
}