import {StorageManager} from "../managers/storage-manager";
import {ConfigManager} from "../managers/config-manager/config-manager.abstract";
import {Initiable} from "../data-structures/initiable";

export interface SharedManagers {
    storageManager: StorageManager,
    configManager: ConfigManager
}

export class SharedContext extends Initiable {
    public storageManager: StorageManager;
    public configManager: ConfigManager;

    constructor(managers: SharedManagers) {
        super();
        this.storageManager = managers.storageManager;
        this.configManager = managers.configManager;
    }
    
    protected async onInit() {
        await this.configManager.init();
    }
}