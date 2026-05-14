import {Config, ConfigManager} from "./config-manager.abstract";
import {getContentScriptContext} from "../../contexts/content-script-context";
import {MessageType} from "../../enums/message-type.enum";
import {postMessage} from "../../utils/port-utils";
import {StorageManager} from "../storage-manager";

export class ConfigManagerContent extends ConfigManager {
    constructor(storageManager: StorageManager) {
        super(storageManager);
    }
    
    async setConfig<K extends keyof Config>(key: K, value: Config[K]): Promise<any> {
        const context = await getContentScriptContext();
        if (!this.config) {
            return
        }

        this.config[key] = value;
        await this.saveConfig(this.config);
        postMessage(context.connectionManager.port, {type: MessageType.ConfigChanged})
    }

}