import {getBackgroundContext} from "../../contexts/background-context";

export async function handleConfigChangedRequest() {
    const context = await getBackgroundContext();
    await context.configManager.reloadConfig();
    return;
}