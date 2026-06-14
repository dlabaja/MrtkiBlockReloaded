import {StorageManager} from "../managers/storage-manager";
import {ConfigManager} from "../managers/config-manager/config-manager.abstract";
import {ErrorManager} from "../managers/error-manager";
import {Initiable} from "../data-structures/initiable";

export interface SharedManagers {
    storageManager: StorageManager,
    errorManager: ErrorManager,
    configManager: ConfigManager
}

export class SharedContext extends Initiable {
    public storageManager: StorageManager;
    public errorManager: ErrorManager;
    public configManager: ConfigManager;

    constructor(managers: SharedManagers) {
        super();
        this.storageManager = managers.storageManager;
        this.errorManager = managers.errorManager;
        this.configManager = managers.configManager;
    }
    
    protected async onInit() {
        await this.configManager.init();
    }
}