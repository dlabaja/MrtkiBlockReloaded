import {DomManager} from "../managers/dom-manager";
import {SharedContext, SharedManagers} from "./shared-context";
import {ConnectionManager} from "../managers/connection-manager";
import {StorageManager} from "../managers/storage-manager";
import {ConfigManagerContent} from "../managers/config-manager/config-manager-content";
import {ConnectionName} from "../enums/connection-name.enum";
import {BackgroundContext} from "./background-context";
import {ErrorManager} from "../managers/error-manager";

export interface ContentScriptManagers extends SharedManagers {
    domManager: DomManager,
    connectionManager: ConnectionManager,
}

export class ContentScriptContext extends SharedContext {
    public domManager: DomManager;
    public connectionManager: ConnectionManager;

    constructor(managers: ContentScriptManagers) {
        super(managers);
        this.connectionManager = managers.connectionManager;
        this.domManager = managers.domManager;
    }
}

let contextPromise: Promise<ContentScriptContext> | null = null;

export function getContentScriptContext() {
    if (!contextPromise) {
        contextPromise = initContentScriptContext();
    }
    return contextPromise;
}

async function initContentScriptContext() {
    const errorManager = new ErrorManager();
    const storageManager = new StorageManager();
    const configManager = new ConfigManagerContent(storageManager);
    
    const connectionManager = new ConnectionManager(ConnectionName.ContentScript);
    const domManager = new DomManager();

    const context = new ContentScriptContext({
        storageManager,
        errorManager,
        configManager,
        connectionManager,
        domManager
    });
    
    await context.init();
    return context;
}