import {StorageKey} from "../enums/storage-key.enum.js";

export class StorageManager {
    public async save<T>(key: StorageKey, data: T) {
        // @ts-ignore
        await chrome.storage.sync.set({[key]: data });
    }
    
    public async get<T>(key: StorageKey): Promise<T | null> {
        // @ts-ignore
        const item = await chrome.storage.sync.get(key);
        if (!item) {
            return null;
        }
        return JSON.parse(item) as T
    }
}