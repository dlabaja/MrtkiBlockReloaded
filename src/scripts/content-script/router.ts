import {Message} from "../interfaces/messages";
import {MessageType} from "../enums/message-type.enum";
import {handleReplaceResponse} from "./response-handlers";

export function processResponse(message: Message): void {
    switch (message.type) {
        case MessageType.Replace:
            handleReplaceResponse(message)
    }
}