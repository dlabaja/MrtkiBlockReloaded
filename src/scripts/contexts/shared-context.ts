import {StorageManager} from "../managers/storage-manager";

export interface SharedManagers {
    storageManager: StorageManager,
}

export class SharedContext {
    public storageManager: StorageManager;

    constructor(managers: SharedManagers) {
        this.storageManager = managers.storageManager;
    }
}