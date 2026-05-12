import {ConfigManager} from "./managers/config-manager.js";
import {DataManager} from "./managers/data-manager.js";
import {TrieManager} from "./managers/trie-manager.js";
import {StorageManager} from "./managers/storage-manager.js";
import {DomManager} from "./managers/dom-manager.js";

export interface Managers {
    configManager: ConfigManager;
    dataManager: DataManager;
    storageManager: StorageManager;
    trieManager: TrieManager;
    domManager: DomManager;
}

export class Context {
    public configManager: ConfigManager;
    public dataManager: DataManager;
    public storageManager: StorageManager;
    public trieManager: TrieManager;
    public domManager: DomManager;

    constructor(managers: Managers) {
        this.configManager = managers.configManager;
        this.dataManager = managers.dataManager;
        this.storageManager = managers.storageManager;
        this.trieManager = managers.trieManager;
        this.domManager = managers.domManager;
    }
}

let context: Promise<Context> | null = null;

export async function getContext() {
    if (!context) {
        return await initContext();
    }
    return context;
}

async function initContext() {
    const configManager = new ConfigManager();
    const storageManager = new StorageManager();
    const dataManager = new DataManager(storageManager);
    await dataManager.init();
    const trieManager = new TrieManager(dataManager);
    const domManager = new DomManager();

    return new Context({
        configManager, storageManager, dataManager, trieManager,
        domManager
    });
}