import {MessageType} from "../enums/message-type.enum";

export type Message = IMessageReplace | IMessageConfigChanged

export interface IMessage {
    type: MessageType
}

export interface IMessageReplace extends IMessage {
    content: IMessageReplaceContent[]
}

export interface IMessageReplaceContent {
    id: number,
    text: string,
    changed: boolean
}

export interface IMessageConfigChanged extends IMessage {}