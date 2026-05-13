import {StorageManager} from "../managers/storage-manager";

export interface SharedManagers {
    storageManager: StorageManager;
}

export class SharedContext {
    public storageManager: StorageManager;

    constructor(managers: SharedManagers) {
        this.storageManager = managers.storageManager;
    }
}

let context: SharedContext | null = null;

export function getSharedContext() {
    if (!context) {
        return initContext();
    }
    return context;
}

function initContext() {
    const storageManager = new StorageManager();
    return new SharedContext({storageManager});
}