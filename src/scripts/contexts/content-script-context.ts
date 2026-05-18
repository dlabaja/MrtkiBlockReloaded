import {DomManager} from "../managers/dom-manager";
import {SharedContext, SharedManagers} from "./shared-context";
import {ConnectionManager} from "../managers/connection-manager";
import {StorageManager} from "../managers/storage-manager";
import {ConfigManagerContent} from "../managers/config-manager/config-manager-content";
import {ConnectionName} from "../enums/connection-name.enum";

export interface ContentScriptManagers extends SharedManagers {
    domManager: DomManager,
    connectionManager: ConnectionManager,
}

export class ContentScriptContext extends SharedContext {
    public domManager: DomManager;
    public connectionManager: ConnectionManager;

    constructor(managers: ContentScriptManagers) {
        super({
            storageManager: managers.storageManager,
            configManager: managers.configManager
        });
        this.connectionManager = managers.connectionManager;
        this.domManager = managers.domManager;
    }
}

let context: ContentScriptContext | null = null;

export async function getContentScriptContext() {
    if (!context) {
        context = await initContentScriptContext();
    }
    return context;
}

export async function initContentScriptContext() {
    const storageManager = new StorageManager();
    const connectionManager = new ConnectionManager(ConnectionName.ContentScript);
    const configManager = new ConfigManagerContent(storageManager);
    await configManager.loadConfig();

    const domManager = new DomManager();
    
    return new ContentScriptContext({
        storageManager,
        connectionManager,
        configManager,
        domManager
    });
}