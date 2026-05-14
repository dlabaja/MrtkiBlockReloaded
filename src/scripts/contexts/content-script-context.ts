import {DomManager} from "../managers/dom-manager";
import {SharedContext, SharedManagers} from "./shared-context";
import {ConnectionManager} from "../managers/connection-manager";
import {StorageManager} from "../managers/storage-manager";
import {ConfigManagerContent} from "../managers/config-manager/config-manager.content";

export interface ContentScriptManagers extends SharedManagers {
    domManager: DomManager;
    connectionManager: ConnectionManager;
}

export class ContentScriptContext extends SharedContext {
    public domManager: DomManager;
    public connectionManager: ConnectionManager;

    constructor(managers: ContentScriptManagers) {
        super({
            storageManager: managers.storageManager,
            configManager: managers.configManager
        });
        this.domManager = managers.domManager;
        this.connectionManager = managers.connectionManager;
    }
}

let context: ContentScriptContext | null = null;

export async function getContentScriptContext() {
    if (!context) {
        context = await initContext();
    }
    return context;
}

async function initContext() {
    const storageManager = new StorageManager();
    
    const configManager = new ConfigManagerContent(storageManager);
    await configManager.loadConfig();

    const domManager = new DomManager();
    const connectionManager = new ConnectionManager();
    
    return new ContentScriptContext({
        storageManager,
        configManager,
        domManager,
        connectionManager
    });
}