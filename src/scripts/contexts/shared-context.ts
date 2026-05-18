import {StorageManager} from "../managers/storage-manager";
import {ConnectionManager} from "../managers/connection-manager";
import {ConfigManager} from "../managers/config-manager/config-manager.abstract";

export interface SharedManagers {
    storageManager: StorageManager,
    configManager: ConfigManager
}

export class SharedContext {
    public storageManager: StorageManager;
    public configManager: ConfigManager;

    constructor(managers: SharedManagers) {
        this.storageManager = managers.storageManager;
        this.configManager = managers.configManager;
    }
}