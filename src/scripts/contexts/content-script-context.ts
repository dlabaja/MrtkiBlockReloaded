import {DomManager} from "../managers/dom-manager";
import {getSharedContext, SharedContext, SharedManagers} from "./shared-context";

export interface ContentScriptManagers extends SharedManagers {
    domManager: DomManager;
}

export class ContentScriptContext extends SharedContext {
    public domManager: DomManager;

    constructor(managers: ContentScriptManagers) {
        super({
            storageManager: managers.storageManager
        });
        this.domManager = managers.domManager;
    }
}

let context: ContentScriptContext | null = null;

export function getContentScriptContext() {
    if (!context) {
        context = initContext();
    }
    return context;
}

function initContext() {
    const sharedContext = getSharedContext();
    const domManager = new DomManager();

    return new ContentScriptContext({
        storageManager: sharedContext.storageManager,
        domManager
    });
}