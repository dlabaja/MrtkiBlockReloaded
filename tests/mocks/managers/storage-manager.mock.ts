import {StorageType} from "../../../src/scripts/enums/storage-type.enum";
import {StorageKey} from "../../../src/scripts/enums/storage-key.enum";

export class StorageManagerMock {
    public async save<T>(storageType: StorageType, key: StorageKey, data: T) {}

    public async get<T>(storageType: StorageType, key: StorageKey): Promise<T | null> {
        return null;
    }

    public async remove(storageType: StorageType, key: StorageKey) {}

    public addListener<T>(storage: StorageType, key: StorageKey, func: (change: {oldValue?: T, newValue?: T}) => void) {}
}