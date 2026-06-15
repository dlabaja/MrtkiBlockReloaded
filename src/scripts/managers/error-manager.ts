import {ExtensionError} from "../enums/error.enum";
import {Context} from "../enums/context.enum";

interface SavedErrors {
    sender: Context,
    errors: ExtensionError[]
}

export class ErrorManager {
    private _errors: ExtensionError[] = [];
    
    public addError(error: ExtensionError) {
        this._errors.push(error);
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