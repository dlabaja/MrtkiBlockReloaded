import {IMessageErrors, IMessageNameIdsResponse, Message} from "../interfaces/messages";
import {MessageType} from "../enums/message-type.enum";
import {handleNameIdsResponse} from "./response-handlers/name-ids-response";
import {handleErrorsResponse} from "./response-handlers/errors-response";

export async function processResponse(message: Message) {
    switch (message.type) {
        case MessageType.NameIds:
            await handleNameIdsResponse(message as IMessageNameIdsResponse);
            break;
        case MessageType.Errors:
            await handleErrorsResponse(message as IMessageErrors);
            break;
    }
}