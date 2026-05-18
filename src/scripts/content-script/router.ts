import {IMessageReplace, Message} from "../interfaces/messages";
import {MessageType} from "../enums/message-type.enum";
import {handleReplaceResponse} from "./response-handlers";
import {handleConfigChangedRequest} from "../background/request-handlers";

export async function processResponse(message: Message) {
    switch (message.type) {
        case MessageType.Replace:
            await handleReplaceResponse(message as IMessageReplace);
            break;
        case MessageType.ConfigChanged:
            await handleConfigChangedRequest();
            break;
    }
}