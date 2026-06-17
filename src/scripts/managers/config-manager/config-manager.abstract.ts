import {StorageManager} from "../storage-manager";
import {Config, defaultConfig} from "../../interfaces/config";
import {StorageType} from "../../enums/storage-type.enum";
import {StorageKey} from "../../enums/storage-key.enum";
import {Initiable} from "../../data-structures/initiable";

// popup uloží config a pošle zprávu, background ji odchytí a aktualizuje config -> content se po reloadu už aktualizuje správně
export abstract class ConfigManager extends Initiable {
    protected _storageManager: StorageManager;
    private _config: Config|null = null;

    protected constructor(storageManager: StorageManager) {
        super();
        this._storageManager = storageManager;
    }

    protected async onInit() {
        await this.reloadConfig();
    };
    
    public async reloadConfig() {
        let config = await this._storageManager.get<Config>(StorageType.Sync, StorageKey.Config);
        const defConfig = defaultConfig();

        if (!config) {
            config = defConfig;
        }
        else {
            // přepíše starý configy
            for (const key in config) {
                // @ts-ignore
                if (config[key] == undefined) {
                    // @ts-ignore
                    config[key] = defConfig[key];
                }
            }
        }
        this._config = config;
    }
    
    public abstract setConfig<K extends keyof Config>(key: K, value: Config[K]): Promise<void>;
    
    public get config() {
        return this._config || defaultConfig();
    }
}