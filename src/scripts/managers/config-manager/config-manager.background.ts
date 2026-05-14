import {Config, ConfigManager} from "./config-manager.abstract";
import {StorageManager} from "../storage-manager";

export class ConfigManagerBackground extends ConfigManager {
    constructor(storageManager: StorageManager) {
        super(storageManager);
    }
    
    async setConfig<K extends keyof Config>(key: K, value: Config[K]): Promise<any> {
        throw new Error("Not implemented, config should be changed only in content script")    
    }
}