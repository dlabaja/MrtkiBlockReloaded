import {getPopupContext} from "../contexts/popup-context";
import {Config} from "../interfaces/config";
import {getRandomItem} from "../utils/random-utils";
import {Message} from "../interfaces/messages";
import {processResponse} from "./router";
import {MessageType} from "../enums/message-type.enum";

const ids = ["disableExtension", "disableTooltips", "disableUpdates", "ignoredWebsites", "ignoredNames"];
const buttons = new Map([
    ["ignoredWebsitesButton", "ignoredWebsites"],
    ["ignoredNamesButton", "ignoredNames"]
]);
const subtitles = [
    "Pro čtení Novinek bez zvýšeného tlaku...",
    "Pro čtení příspěvků Miroslavy Tymlové",
    "Pro čtení diskuzí bez újmy na zdraví",
    "Pro blokování hnoje na webu",
    "Pro sledování porna bez zmínky Rajchlova jména",
    
]

getPopupContext().then(async (context) => {
    async function onCheckboxChanged(key: keyof Config, event: Event) {
        const checkbox = event.target as HTMLInputElement;
        await context.configManager.setConfig(key, checkbox.checked);
    }
    
    async function onTextAreaChanged(key: keyof Config, event: Event) {
        const button = event.target as HTMLInputElement;
        const textAreaId = buttons.get(button.id);
        if (!textAreaId) {
            return;
        }
        const textArea = document.getElementById(textAreaId) as HTMLInputElement;
        await context.configManager.setConfig(key, textAreaToArray(textArea.value));
    }
    
    async function onDisableExtensionChanged(event: Event) {
        await onCheckboxChanged("disableExtension", event);
    }

    async function onDisableTooltipsChanged(event: Event) {
        await onCheckboxChanged("disableTooltips", event);
    }

    async function onDisableUpdatesChanged(event: Event) {
        await onCheckboxChanged("disableUpdates", event);
    }

    async function onIgnoredWebsitesChanged(event: Event) {
        await onTextAreaChanged("ignoredWebsites", event);
    }

    async function onIgnoredNamesChanged(event: Event) {
        await onTextAreaChanged("ignoredNames", event);
    }
    
    function loadConfig() {
        const config = context.configManager.config;
        if (!config) {
            return
        }

        setConfigInDom(ids[0], "disableExtension");
        setConfigInDom(ids[1], "disableTooltips");
        setConfigInDom(ids[2], "disableUpdates");
        setConfigInDom(ids[3], "ignoredWebsites");
        setConfigInDom(ids[4], "ignoredNames");
    }
    
    function setConfigInDom<K extends keyof Config>(id: string, key: K) {
        const config = context.configManager.config;
        if (!config) {
            return;
        }
        
        const value: Config[K] = config[key];
        console.log(value)
        const element = document.getElementById(id) as HTMLInputElement;
        if (element.type === "checkbox") {
            // @ts-ignore
            element.checked = value;
            return;
        }
        // @ts-ignore
        element.value = value;
    }
    
    function init() {
        context.connectionManager.port.onMessage.addListener(async (m) => {
            await processResponse(m as Message)
        });
        
        context.connectionManager.postMessage({type: MessageType.NameIds});
        
        document.getElementById("subtitle")!.innerText = getRandomItem(subtitles);
        loadConfig();
        
        registerCallback(ids[0], "change", onDisableExtensionChanged)
        registerCallback(ids[1], "change", onDisableTooltipsChanged)
        registerCallback(ids[2], "change", onDisableUpdatesChanged)
        registerCallback("ignoredWebsitesButton", "click", onIgnoredWebsitesChanged)
        registerCallback("ignoredNamesButton", "click", onIgnoredNamesChanged)
    }
    
    init();
});

export function setNameIdsTextArea(nameIds: string[]) {
    const element = document.getElementById("loadedNames");
    if (!element) {
        return;
    }
    element.innerText = nameIds.join(", ");
}

function textAreaToArray(x: string) {
    return x.split(",")
        .map(x => x.trim().toLowerCase().replaceAll("\n", ""))
        .filter(x => x != "");
}

function registerCallback(id: string, event: keyof HTMLElementEventMap, callback: (event: Event) => void) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener(event, callback);
    }
}
