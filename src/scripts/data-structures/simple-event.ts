import EventEmitter from "events";

// tady se chci trochu přiblížit C# eventům které jsou based a dobré
export class SimpleEvent {
    private _eventEmitter = new EventEmitter();
    
    public emit(...args: any[]) {
        this._eventEmitter.emit("", ...args);
    }
    
    public addListener(listener: (...args: any[]) => void) {
        this._eventEmitter.addListener("", listener);
    }
    
    public removeListener(listener: (...args: any[]) => void) {
        this._eventEmitter.removeListener("", listener);
    }
}