import {getPopupContext} from "../contexts/popup-context";
import {Config} from "../interfaces/config";
import {getRandomItem} from "../utils/random-utils";

getPopupContext().then(async (context) => {
    async function onCheckboxChanged(key: keyof Config, event: Event) {
        const checkbox = event.target as HTMLInputElement;
        await context.configManager.setConfig(key, checkbox.checked);
    }
    
    async function onTextAreaChanged(key: keyof Config, event: Event) {
        const textArea = event.target as HTMLInputElement;
        await context.configManager.setConfig(key, textArea.value);
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

    function init() {
        document.getElementById("subtitle")!.innerText = getRandomItem(subtitles);
        registerCallback("disableExtension", "change", onDisableExtensionChanged)
        registerCallback("disableTooltips", "change", onDisableTooltipsChanged)
        registerCallback("disableUpdates", "change", onDisableUpdatesChanged)
        registerCallback("ignoredWebsitesButton", "click", onIgnoredWebsitesChanged)
        registerCallback("ignoredNames", "click", onIgnoredNamesChanged)
    }

    init();
});

const subtitles = [
    "Pro čtení Novinek bez zvýšeného tlaku...",
    "Pro čtení příspěvků Miroslavy Tymlové",
    "Pro čtení diskuzí bez újmy na zdraví"
]

function registerCallback(id: string, event: keyof HTMLElementEventMap, callback: (event: Event) => void) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener(event, callback);
    }
}
