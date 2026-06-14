import {SimpleEvent} from "../data-structures/simple-event";
import {ExtensionError} from "../enums/error.enum";
import {StorageManager} from "./storage-manager";
import {StorageType} from "../enums/storage-type.enum";
import {StorageKey} from "../enums/storage-key.enum";
import {Context} from "../enums/context.enum";

interface SavedErrors {
    sender: Context,
    errors: ExtensionError[]
}

export class ErrorManager {
    private _storageManager: StorageManager;
    private _errors: ExtensionError[] = [];
    private readonly _context: Context;
    public onErrorsUpdate = new SimpleEvent();
    
    constructor(context: Context, storageManager: StorageManager) {
        this._context = context;
        this._storageManager = storageManager;
        storageManager.addListener<SavedErrors>(StorageType.Session, StorageKey.Error, async (change) => {
            if (change.newValue?.sender != this._context) {
                await this.updateErrors();
            }
        });
    }
    
    public addError(error: ExtensionError) {
        this._errors.push(error);
        this.onErrorsUpdate.emit([...this._errors]);
        this._storageManager.save<SavedErrors>(StorageType.Session, StorageKey.Error, {
            sender: this._context,
            errors: this._errors
        });
    }
    
    public async updateErrors() {
        const saved = await this._storageManager.get<SavedErrors>(StorageType.Session, StorageKey.Error);
        if (!saved) {
            return;
        }
        this._errors = saved.errors;
        this.onErrorsUpdate.emit([...this._errors]);
    }

    public get errors() {
        return [...this._errors];
    }

    public static getErrorMessage(error: ExtensionError): string {
        switch (error) {
            case ExtensionError.DataFetchFailed:
                return "Nejde stáhnout některý ze zdrojů přezdívek - zkontrolujte jejich url"
            case ExtensionError.DataParseFailed:
                return "Nejde naparsovat některý ze zdrojů přezdívek - zkontrolujte jejich JSON formát"
        }
    }
}