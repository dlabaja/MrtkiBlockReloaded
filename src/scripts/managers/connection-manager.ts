import browser, {Runtime} from "webextension-polyfill";
import Port = Runtime.Port;

export class ConnectionManager {
    public port: Port; 
    
    constructor() {
        this.port = browser.runtime.connect()
    }
}