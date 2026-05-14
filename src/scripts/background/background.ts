import browser, {Runtime} from "webextension-polyfill";
import Port = Runtime.Port;
import {Message} from "../interfaces/messages";
import {processRequest} from "./router";
import {getBackgroundContext} from "../contexts/background-context";

// kód tady se spustí hned po zapnutí prohlížeče, dá se považovat za server
getBackgroundContext().then();

browser.runtime.onConnect.addListener(onConnect);

function onConnect(port: Port) {
    port.onMessage.addListener(async (m, p) => {
        await processRequest(m as Message, p);
    });
}