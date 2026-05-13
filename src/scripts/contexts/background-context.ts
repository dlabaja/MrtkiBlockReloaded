import {ConfigManager} from "../managers/config-manager";
import {DataManager} from "../managers/data-manager";
import {TrieManager} from "../managers/trie-manager";
import {getSharedContext, SharedContext, SharedManagers} from "./shared-context";

export interface BackgroundManagers extends SharedManagers {
    configManager: ConfigManager;
    dataManager: DataManager;
    trieManager: TrieManager;
}

export class BackgroundContext extends SharedContext {
    public configManager: ConfigManager;
    public dataManager: DataManager;
    public trieManager: TrieManager;

    constructor(managers: BackgroundManagers) {
        super({
            storageManager: managers.storageManager
        });
        this.configManager = managers.configManager;
        this.dataManager = managers.dataManager;
        this.trieManager = managers.trieManager;
    }
    
    public async init() {
        await this.dataManager.init();
    }
}

let context: Promise<BackgroundContext> | null = null;

export async function getBackgroundContext() {
    if (!context) {
        console.log("dělám nový kontext")
        return await initContext();
    }
    console.log("kontext už existuje")
    return context;
}

async function initContext() {
    const sharedContext = getSharedContext();
    const configManager = new ConfigManager();
    const dataManager = new DataManager(sharedContext.storageManager);
    const trieManager = new TrieManager(dataManager);
    
    const backgroundContext = new BackgroundContext({
        storageManager: sharedContext.storageManager,
        configManager, 
        dataManager, 
        trieManager
    });
    await backgroundContext.init();

    return backgroundContext;
}