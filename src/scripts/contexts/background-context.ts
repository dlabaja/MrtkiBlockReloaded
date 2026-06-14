import {DataManager} from "../managers/data-manager";
import {TrieManager} from "../managers/trie-manager";
import {SharedContext, SharedManagers} from "./shared-context";
import {ConfigManagerBackground} from "../managers/config-manager/config-manager-background";
import {StorageManager} from "../managers/storage-manager";
import {ErrorManager} from "../managers/error-manager";
import {DataFetchManager} from "../managers/data-fetch-manager";

export interface BackgroundManagers extends SharedManagers {
    dataFetchManager: DataFetchManager,
    dataManager: DataManager,
    trieManager: TrieManager
}

export class BackgroundContext extends SharedContext {
    public dataFetchManager: DataFetchManager;
    public dataManager: DataManager;
    public trieManager: TrieManager;

    constructor(managers: BackgroundManagers) {
        super(managers);
        this.dataFetchManager = managers.dataFetchManager;
        this.dataManager = managers.dataManager;
        this.trieManager = managers.trieManager;
    }

    protected async onInit(): Promise<void> {
        await super.onInit();
        await this.dataFetchManager.init();
        await this.dataManager.init();
        await this.trieManager.init();
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
    const storageManager = new StorageManager();
    const errorManager = new ErrorManager();
    const configManager = new ConfigManagerBackground(storageManager);
    
    const dataFetchManager = new DataFetchManager(storageManager, configManager, errorManager);
    const dataManager = new DataManager(configManager, dataFetchManager);
    const trieManager = new TrieManager(dataManager);

    return new BackgroundContext({
        storageManager,
        errorManager,
        configManager,
        dataFetchManager,
        dataManager,
        trieManager
    });
}