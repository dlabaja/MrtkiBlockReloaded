import browser, {Runtime} from "webextension-polyfill";
import Port = Runtime.Port;
import {Message} from "../interfaces/messages";
import {processRequest} from "./router";
import {getBackgroundContext} from "../contexts/background-context";

// kód tady se spustí hned po zapnutí prohlížeče, dá se považovat za server
getBackgroundContext().then(c => c.init());

browser.runtime.onConnect.addListener(onConnect);

function onConnect(port: Port) {
    port.onMessage.addListener((m, p) => {
        processRequest(m as Message).then(message => {
            port.postMessage(message);
        })
    });
}





