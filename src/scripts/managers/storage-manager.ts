import {StorageKey} from "../enums/storage-key.enum";

export class StorageManager {
    public async save<T>(key: StorageKey, data: T) {
        // @ts-ignore
        await chrome.storage.sync.set({[key]: data });
    }
    
    public async get<T>(key: StorageKey): Promise<T | null> {
        // @ts-ignore
        const item = await chrome.storage.managed.get(key);
        if (!item) {
            return null;
        }
        return JSON.parse(item) as T
    }
}