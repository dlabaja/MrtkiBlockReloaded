import {StorageManager} from "../storage-manager";
import {Config} from "../../interfaces/config";
import {ConfigManager} from "./config-manager.abstract";

export class ConfigManagerContent extends ConfigManager {
    constructor(storageManager: StorageManager) {
        super(storageManager);
    }
    
    public async setConfig<K extends keyof Config>(key: K, value: Config[K]) {
        throw new Error("Method not implemented.");
    }
}