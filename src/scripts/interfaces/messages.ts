import {MessageType} from "../enums/message-type.enum";
import {ExtensionError} from "../enums/error.enum";

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


export interface IMessageNameIdsRequest extends IMessage {}
export interface IMessageNameIdsResponse extends IMessage {
    nameIds: string[]
}

export interface IMessageErrors extends IMessage {
    errors: ExtensionError[]
}