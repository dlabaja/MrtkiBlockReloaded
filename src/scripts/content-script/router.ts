import {IMessageReplace, Message} from "../interfaces/messages";
import {MessageType} from "../enums/message-type.enum";
import {handleReplaceResponse} from "./response-handlers";

export async function processResponse(message: Message) {
    switch (message.type) {
        case MessageType.Replace:
            await handleReplaceResponse(message as IMessageReplace);
            break;
    }
}