import {IMessageNameIdsResponse, Message} from "../interfaces/messages";
import {MessageType} from "../enums/message-type.enum";
import {handleNameIdsResponse} from "./response-handlers";

export async function processResponse(message: Message) {
    switch (message.type) {
        case MessageType.NameIds:
            await handleNameIdsResponse(message as IMessageNameIdsResponse);
            break;
    }
}