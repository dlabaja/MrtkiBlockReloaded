import {ConnectionName} from "../enums/connection-name.enum";
import {SharedContext, SharedManagers} from "./shared-context";
import {StorageManager} from "../managers/storage-manager";
import {ConnectionManager} from "../managers/connection-manager";
import {ConfigManagerPopup} from "../managers/config-manager/config-manager-popup";
import {BackgroundContext} from "./background-context";
import {ErrorManager} from "../managers/error-manager";

export interface PopupManagers extends SharedManagers {
    connectionManager: ConnectionManager
}

export class PopupContext extends SharedContext {
    public connectionManager: ConnectionManager;

    constructor(managers: PopupManagers) {
        super({
            storageManager: managers.storageManager,
            configManager: managers.configManager,
            errorManager: managers.errorManager
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
    const errorManager = new ErrorManager();
    const storageManager = new StorageManager();
    const connectionManager = new ConnectionManager(ConnectionName.Popup);
    const configManager = new ConfigManagerPopup(storageManager);
    await configManager.loadConfig();
    
    return new PopupContext({
        storageManager,
        connectionManager,
        configManager,
        errorManager
    });
}