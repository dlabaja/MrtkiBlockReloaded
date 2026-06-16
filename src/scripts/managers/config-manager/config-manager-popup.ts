import {getContentScriptContext} from "../../contexts/content-script-context";
import {MessageType} from "../../enums/message-type.enum";
import {StorageManager} from "../storage-manager";
import {StorageType} from "../../enums/storage-type.enum";
import {StorageKey} from "../../enums/storage-key.enum";
import {Config} from "../../interfaces/config";
import {ConfigManager} from "./config-manager.abstract";

export class ConfigManagerPopup extends ConfigManager {
    constructor(storageManager: StorageManager) {
        super(storageManager);
    }

    private async saveConfig() {
        await this._storageManager.save(StorageType.Sync, StorageKey.Config, this.config);
    }
    
    // jen popup posílá zprávy
    public async setConfig<K extends keyof Config>(key: K, value: Config[K]) {
        const context = await getContentScriptContext();
        this.config[key] = value;
        await this.saveConfig();
        context.connectionManager.postMessage({type: MessageType.ConfigChanged});
    }
}