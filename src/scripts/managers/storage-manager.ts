import {StorageKey} from "../enums/storage-key.enum";
import browser, {Storage} from "webextension-polyfill";
import {StorageType} from "../enums/storage-type.enum";
import StorageArea = Storage.StorageArea;

export class StorageManager {
    public async save<T>(storageType: StorageType, key: StorageKey, data: T) {
        await this.getStorageArea(storageType).set({[key]: data });
    }
    
    public async get<T>(storageType: StorageType, key: StorageKey): Promise<T | null> {
        const result = await this.getStorageArea(storageType).get(key);
        const value = result[key];

        // může tam být false nebo 0
        if (value === undefined) {
            return null;
        }

        return value as T;
    }
    
    public async remove(storageType: StorageType, key: StorageKey) {
        await this.getStorageArea(storageType).remove(key);
    }
    
    private getStorageArea(storage: StorageType): StorageArea {
        switch (storage) {
            case StorageType.Local:
                return browser.storage.local;
            case StorageType.Session:
                return browser.storage.session;
            case StorageType.Sync:
                return browser.storage.sync;
        }
    }
}