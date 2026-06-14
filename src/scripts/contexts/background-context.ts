import {DataManager} from "../managers/data-manager";
import {TrieManager} from "../managers/trie-manager";
import {SharedContext, SharedManagers} from "./shared-context";
import {ConfigManagerBackground} from "../managers/config-manager/config-manager-background";
import {StorageManager} from "../managers/storage-manager";
import {ErrorManager} from "../managers/error-manager";

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
            configManager: managers.configManager,
            errorManager: managers.errorManager
        });
        this.dataManager = managers.dataManager;
        this.trieManager = managers.trieManager;
    }
}

let contextPromise: Promise<BackgroundContext> | null = null;

// promise je sdílenej, když se jednou awaitne bude už vyřešenej
export function getBackgroundContext(): Promise<BackgroundContext> {
    if (!contextPromise) {
        contextPromise = initBackgroundContext();
    }

    return contextPromise;
}

async function initBackgroundContext() {
    const errorManager = new ErrorManager();
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
        trieManager,
        errorManager
    });
}