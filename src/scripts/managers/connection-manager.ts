import browser, {Runtime} from "webextension-polyfill";
import Port = Runtime.Port;
import {Message} from "../interfaces/messages";
import {ConnectionName} from "../enums/connection-name.enum";

export class ConnectionManager {
    private _port: Port|null = null;
    private _messageQueue: Message[] = [];
    public readonly connectionName: ConnectionName;
    
    constructor(connectionName: ConnectionName) {
        this.connectionName = connectionName;
    }
    
    public establishConnection(onMessage: (message: Message) => Promise<void>) {
        const listener = async (message: unknown) => await onMessage(message as Message);
        if (this._port) {
            this._port.onMessage.removeListener(listener);
            this._port.disconnect();
        }
        this._port = browser.runtime.connect(undefined, {name: this.connectionName})
        this._port.onMessage.addListener(listener)
        this.flushQueue();
    }

    public postMessage<T extends Message>(message: T) {
        if (!this._port) {
            this._messageQueue.push(message);
            return;
        }
        this._port.postMessage(message);
    }
    
    private flushQueue() {
        for (const message of this._messageQueue) {
            this._port?.postMessage(message)
        }
        this._messageQueue = [];
    }
}