import browser, {Runtime} from "webextension-polyfill";
import Port = Runtime.Port;
import {Message} from "../interfaces/messages";
import {ConnectionName} from "../enums/connection-name.enum";

export class ConnectionManager {
    public port: Port; 
    
    constructor(connectionName: ConnectionName) {
        this.port = browser.runtime.connect(undefined, {name: connectionName})
    }

    public postMessage<T extends Message>(message: T) {
        this.port.postMessage(message);
    }
}