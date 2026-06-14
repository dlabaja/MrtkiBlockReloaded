import {StorageManager} from "../managers/storage-manager";
import {ConfigManager} from "../managers/config-manager/config-manager.abstract";
import {ErrorManager} from "../managers/error-manager";

export interface SharedManagers {
    storageManager: StorageManager,
    configManager: ConfigManager,
    errorManager: ErrorManager
}

export class SharedContext {
    public storageManager: StorageManager;
    public configManager: ConfigManager;
    public errorManager: ErrorManager;

    constructor(managers: SharedManagers) {
        this.storageManager = managers.storageManager;
        this.configManager = managers.configManager;
        this.errorManager = managers.errorManager;
    }
}