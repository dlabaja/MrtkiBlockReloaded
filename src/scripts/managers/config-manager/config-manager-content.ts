import {getContentScriptContext} from "../../contexts/content-script-context";
import {MessageType} from "../../enums/message-type.enum";
import {StorageManager} from "../storage-manager";
import {StorageType} from "../../enums/storage-type.enum";
import {StorageKey} from "../../enums/storage-key.enum";
import {Config} from "../../interfaces/config";

export class ConfigManagerContent {
    private _storageManager: StorageManager;
    public config: Config|null = null;
    
    constructor(storageManager: StorageManager) {
        this._storageManager = storageManager;
    }

    public async loadConfig() {
        let config = await this._storageManager.get<Config>(StorageType.Sync, StorageKey.Config);
        if (!config) {
            config = {
                disableExtension: false,
                disableTooltips: false,
                disableUpdates: false,
                ignoredWebsites: []
            }
            await this.saveConfig(config);
        }
        this.config = config;
    }

    private async saveConfig(config: Config) {
        await this._storageManager.save(StorageType.Sync, StorageKey.Config, config)
    }
    
    public async setConfig<K extends keyof Config>(key: K, value: Config[K]): Promise<any> {
        const context = await getContentScriptContext();
        if (!this.config) {
            return
        }

        this.config[key] = value;
        await this.saveConfig(this.config);
        context.connectionManager.postMessage({type: MessageType.ConfigChanged})
    }
}