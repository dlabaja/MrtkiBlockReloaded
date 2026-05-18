import {StorageManager} from "../storage-manager";
import {Config, defaultConfig} from "../../interfaces/config";
import {StorageType} from "../../enums/storage-type.enum";
import {StorageKey} from "../../enums/storage-key.enum";

// popup uloží config a pošle zprávu, background ji odchytí a aktualizje config -> content se po reloadu už aktualizuje správně
export abstract class ConfigManager {
    protected _storageManager: StorageManager;
    public config: Config|null = null;
    private _ignoredWebsites: string[] = [];

    protected constructor(storageManager: StorageManager) {
        this._storageManager = storageManager;
    }

    public async loadConfig() {
        let config = await this._storageManager.get<Config>(StorageType.Sync, StorageKey.Config);
        if (!config) {
            config = defaultConfig();
        }
        this.config = config;
        this._ignoredWebsites = this.config.ignoredWebsites.split("\n").map(x => x.trim().toLowerCase());
    };
    
    public abstract setConfig<K extends keyof Config>(key: K, value: Config[K]): Promise<void>;
    
    public isIgnoredWebsite(hostname: string) {
        return this._ignoredWebsites.includes(hostname.trim().toLowerCase());
    }
}