import {StorageManager} from "../storage-manager";
import {StorageType} from "../../enums/storage-type.enum";
import {StorageKey} from "../../enums/storage-key.enum";

export interface Config {
    temporarilyDisabled: boolean,
    disableTooltips: boolean,
}

export abstract class ConfigManager {
    protected _storageManager: StorageManager;
    public config: Config|null = null;
    
    protected constructor(storageManager: StorageManager) {
        this._storageManager = storageManager;
    }
    
    public async loadConfig() {
        let config = await this._storageManager.get<Config>(StorageType.Sync, StorageKey.Config);
        if (!config) {
            config = {
                temporarilyDisabled: false,
                disableTooltips: false
            }
            await this.saveConfig(config);
        }
        this.config = config;
    }
    
    protected async saveConfig(config: Config) {
        await this._storageManager.save(StorageType.Sync, StorageKey.Config, config)
    }
    
    public abstract setConfig<K extends keyof Config>(key: K, value: Config[K]): void;
}