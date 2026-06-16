import {MessageType} from "../enums/message-type.enum";
import {ExtensionError} from "../enums/error.enum";
import {NameIdsWithSource} from "./name-ids-with-source";

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
    nameIdsWithSources: NameIdsWithSource[]
}

export interface IMessageErrors extends IMessage {
    errors: ExtensionError[]
}