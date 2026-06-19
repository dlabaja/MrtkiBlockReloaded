import {ExtensionError} from "../enums/error.enum";

export class ErrorManager {
    private _errors: Set<ExtensionError> = new Set<ExtensionError>();
    
    public addError(error: ExtensionError) {
        if (!this._errors.has(error)) {
            this._errors.add(error);
        }
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