import {DomManager} from "../managers/dom-manager";
import {SharedContext, SharedManagers} from "./shared-context";
import {ConnectionManager} from "../managers/connection-manager";
import {StorageManager} from "../managers/storage-manager";
import {ConfigManagerContent} from "../managers/config-manager/config-manager-content";
import {ConnectionName} from "../enums/connection-name.enum";

export interface ContentScriptManagers extends SharedManagers {
    domManager: DomManager,
    connectionManager: ConnectionManager,
    configManagerContent: ConfigManagerContent
}

export class ContentScriptContext extends SharedContext {
    public domManager: DomManager;
    public connectionManager: ConnectionManager;
    public configManagerContent: ConfigManagerContent;

    constructor(managers: ContentScriptManagers) {
        super({
            storageManager: managers.storageManager,
        });
        this.domManager = managers.domManager;
        this.connectionManager = managers.connectionManager;
        this.configManagerContent = managers.configManagerContent;
    }
}

let context: ContentScriptContext | null = null;

export async function getContentScriptContext() {
    if (!context) {
        context = await initContentScriptContext(ConnectionName.ContentScript);
    }
    return context;
}

export async function initContentScriptContext(connectionName: ConnectionName) {
    const storageManager = new StorageManager();
    
    const configManagerContent = new ConfigManagerContent(storageManager);
    await configManagerContent.loadConfig();

    const domManager = new DomManager();
    const connectionManager = new ConnectionManager(connectionName);
    
    return new ContentScriptContext({
        storageManager,
        configManagerContent,
        domManager,
        connectionManager
    });
}