import {Runtime} from "webextension-polyfill";
import Port = Runtime.Port;
import {Message} from "../interfaces/messages";

export function postMessage<T extends Message>(port: Port, message: T) {
    port.postMessage(message);
}