import {ConfigManager} from "./scripts/managers/config-manager";
import {DataManager} from "./scripts/managers/data-manager";
import {StorageManager} from "./scripts/managers/storage-manager";
import {TrieManager} from "./scripts/managers/trie-manager";

export interface Managers {
    configManager: ConfigManager;
    dataManager: DataManager;
    storageManager: StorageManager;
    trieManager: TrieManager;
}

export class Context {
    public configManager: ConfigManager;
    public dataManager: DataManager;
    public storageManager: StorageManager;
    public trieManager: TrieManager;
    
    constructor(managers: Managers) {
        this.configManager = managers.configManager;
        this.dataManager = managers.dataManager;
        this.storageManager = managers.storageManager;
        this.trieManager = managers.trieManager;
    }
}

export let context: Context;
getContext().then(res => context = res);

async function getContext() {
    const configManager = new ConfigManager();
    const storageManager = new StorageManager();
    const dataManager = new DataManager(storageManager);
    await dataManager.init();
    const trieManager = new TrieManager(dataManager);

    return new Context({configManager, storageManager, dataManager, trieManager});
}