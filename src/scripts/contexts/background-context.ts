import {DataManager} from "../managers/data-manager";
import {TrieManager} from "../managers/trie-manager";
import {SharedContext, SharedManagers} from "./shared-context";
import {ConfigManagerBackground} from "../managers/config-manager/config-manager-background";
import {StorageManager} from "../managers/storage-manager";

export interface BackgroundManagers extends SharedManagers {
    dataManager: DataManager,
    trieManager: TrieManager,
}

export class BackgroundContext extends SharedContext {
    public dataManager: DataManager;
    public trieManager: TrieManager;

    constructor(managers: BackgroundManagers) {
        super({
            storageManager: managers.storageManager,
            configManager: managers.configManager
        });
        this.dataManager = managers.dataManager;
        this.trieManager = managers.trieManager;
    }
}

let context: BackgroundContext | null = null;

export async function getBackgroundContext() {
    if (!context) {
        context = await initBackgroundContext();
    }
    return context;
}

async function initBackgroundContext() {
    const storageManager = new StorageManager();
    const configManager = new ConfigManagerBackground(storageManager);
    await configManager.loadConfig();
    
    const dataManager = new DataManager(storageManager, configManager);
    await dataManager.init();
    const trieManager = new TrieManager(dataManager);

    return new BackgroundContext({
        storageManager,
        configManager,
        dataManager,
        trieManager
    });
}