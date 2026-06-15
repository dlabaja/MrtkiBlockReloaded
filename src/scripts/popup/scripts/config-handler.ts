import {getPopupContext} from "../../contexts/popup-context";
import {Config, defaultConfig} from "../../interfaces/config";
import {ConfigManager} from "../../managers/config-manager/config-manager.abstract";

const disableExtensionCheckbox = getInputElement("disableExtension");
const disableTooltipsCheckbox = getInputElement("disableTooltips");
const disableUpdatesCheckbox = getInputElement("disableUpdates");
const dataSourcesTextArea = getInputElement("dataSources");
const dataSourcesConfirm = getInputElement("dataSourcesConfirm")
const dataSourcesReset = getInputElement("dataSourcesReset")
const ignoredWebsitesTextArea = getInputElement("ignoredWebsites");
const ignoredWebsitesConfirm = getInputElement("ignoredWebsitesConfirm")
const ignoredNamesTextArea = getInputElement("ignoredNames");
const ignoredNamesConfirm = getInputElement("ignoredNamesConfirm")

getPopupContext().then(context => {
    const config = context.configManager.config;
    if (!config) {
        throw new Error("Nejde načíst config");
    }
    loadConfig(config)
    registerCallbacks(context.configManager);
})

function loadConfig(config: Config) {
    disableExtensionCheckbox.checked = config.disableExtension;
    disableTooltipsCheckbox.checked = config.disableTooltips;
    disableUpdatesCheckbox.checked = config.disableUpdates;
    dataSourcesTextArea.value = arrayToTextArea(config.dataSources);
    ignoredWebsitesTextArea.value = arrayToTextArea(config.ignoredWebsites);
    ignoredNamesTextArea.value = arrayToTextArea(config.ignoredNames);
}

function registerCallbacks(configManager: ConfigManager) {
    registerCheckboxCallback(disableExtensionCheckbox, "disableExtension", configManager);
    registerCheckboxCallback(disableTooltipsCheckbox, "disableTooltips", configManager);
    registerCheckboxCallback(disableUpdatesCheckbox, "disableUpdates", configManager);
    registerTextAreaCallback(dataSourcesTextArea, dataSourcesConfirm, dataSourcesReset, "dataSources", configManager);
    registerTextAreaCallback(ignoredWebsitesTextArea, ignoredWebsitesConfirm, null, "ignoredWebsites", configManager);
    registerTextAreaCallback(ignoredNamesTextArea, ignoredNamesConfirm, null, "ignoredNames", configManager);
}

function registerCheckboxCallback(checkbox: HTMLInputElement, configKey: keyof Config, configManager: ConfigManager) {
    checkbox.addEventListener("change", () => configManager.setConfig(configKey, checkbox.checked))
}

function registerTextAreaCallback(textArea: HTMLInputElement, confirmButton: HTMLInputElement, resetButton: HTMLInputElement|null,
                                  configKey: keyof Config, configManager: ConfigManager) {
    textArea.addEventListener("change", () => {
        confirmButton.disabled = false;
        if (resetButton) {
            resetButton.disabled = false;
        }
    });
    confirmButton.addEventListener("click", () => {
        confirmButton.disabled = true;
        configManager.setConfig(configKey, textAreaToArray(textArea.value))
    });
    if (resetButton) {
        resetButton.addEventListener("click", () => {
            const defConfig = defaultConfig()[configKey];
            const newValue = Array.isArray(defConfig) ? defConfig : [];
            resetButton.disabled = true;
            textArea.value = arrayToTextArea(newValue);
            configManager.setConfig(configKey, newValue)
        });
    }
}

function arrayToTextArea<T>(array: T[]): string {
    return array.join(",")
}

function textAreaToArray(textAreaValue: string): string[] {
    return textAreaValue.split(",")
        .map(x => x.trim().toLowerCase().replaceAll("\n", ""))
        .filter(x => x != "");
}

function getInputElement(id: string): HTMLInputElement {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Nejde najít element s id ${id}`);
    }
    return element as HTMLInputElement;
}
