import {ContentScriptContext, initContentScriptContext} from "./content-script-context";
import {ConnectionName} from "../enums/connection-name.enum";

class PopupContext extends ContentScriptContext {}

let context: PopupContext | null = null;

export async function getPopupContext() {
    if (!context) {
        context = await initContext();
    }
    return context;
}

async function initContext() {
    return await initContentScriptContext(ConnectionName.Popup);
}