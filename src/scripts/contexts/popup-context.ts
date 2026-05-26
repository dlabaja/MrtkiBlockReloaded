import {ConnectionName} from "../enums/connection-name.enum";
import {SharedContext, SharedManagers} from "./shared-context";
import {StorageManager} from "../managers/storage-manager";
import {ConnectionManager} from "../managers/connection-manager";
import {ConfigManagerPopup} from "../managers/config-manager/config-manager-popup";
import {BackgroundContext} from "./background-context";

export interface PopupManagers extends SharedManagers {
    connectionManager: ConnectionManager
}

export class PopupContext extends SharedContext {
    public connectionManager: ConnectionManager;

    constructor(managers: PopupManagers) {
        super({
            storageManager: managers.storageManager,
            configManager: managers.configManager
        });
        this.connectionManager = managers.connectionManager;
    }
}

let contextPromise: Promise<PopupContext> | null = null;

export function getPopupContext() {
    if (!contextPromise) {
        contextPromise = initPopupContext();
    }
    return contextPromise;
}

async function initPopupContext() {
    const storageManager = new StorageManager();
    const connectionManager = new ConnectionManager(ConnectionName.Popup);
    const configManager = new ConfigManagerPopup(storageManager);
    await configManager.loadConfig();
    
    return new PopupContext({
        storageManager,
        connectionManager,
        configManager,
    });
}