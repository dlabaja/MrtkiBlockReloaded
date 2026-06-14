import {SimpleEvent} from "../data-structures/simple-event";
import {ExtensionError} from "../enums/error.enum";

export class ErrorManager {
    private _errors: ExtensionError[] = [];
    public onErrorsUpdate = new SimpleEvent();
    
    public addError(error: ExtensionError) {
        this._errors.push(error);
        this.onErrorsUpdate.emit(this._errors);
    }
    
    public setErrors(errors: ExtensionError[]) {
        this._errors = errors;
        this.onErrorsUpdate.emit(this._errors);
    }

    public get errors() {
        return this._errors;
    }

    public static getErrorMessage(error: ExtensionError) {
        switch (error) {
            case ExtensionError.DataFetchFailed:
                return "Nejde stáhnout některý ze zdrojů přezdívek - zkontrolujte jejich url"
            case ExtensionError.DataParseFailed:
                return "Nejde naparsovat některý ze zdrojů přezdívek - zkontrolujte jejich JSON formát"
        }
    }
}