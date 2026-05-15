import {StorageManager} from "../storage-manager";
import {StorageType} from "../../enums/storage-type.enum";
import {StorageKey} from "../../enums/storage-key.enum";
import {Config} from "../../interfaces/config";

export class ConfigManagerBackground {
    private _storageManager: StorageManager;
    public config: Config|null = null;
    
    constructor(storageManager: StorageManager) {
        this._storageManager = storageManager;
    }

    public async loadConfig() { // tady se to nesavuje
        let config = await this._storageManager.get<Config>(StorageType.Sync, StorageKey.Config);
        if (!config) {
            config = {
                disableExtension: false,
                disableTooltips: false,
                disableUpdates: false,
                ignoredWebsites: []
            }
        }
        this.config = config;
    }

    private async saveConfig(config: Config) {
        await this._storageManager.save(StorageType.Sync, StorageKey.Config, config)
    }
}