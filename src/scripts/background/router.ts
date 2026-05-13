import {Message} from "../interfaces/messages";
import {MessageType} from "../enums/message-type.enum";
import {handleReplaceRequest} from "./request-handlers";

export async function processRequest(message: Message): Promise<Message> {
    switch (message.type) {
        case MessageType.Replace:
            return await handleReplaceRequest(message)
    }
}