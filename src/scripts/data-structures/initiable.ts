export abstract class Initiable {
    private _promise: Promise<void>|null = null;
    private _isInitialised = false;
    
    public async init() {
        if (this._promise || this._isInitialised) {
            return;
        }
        
        try {
            this._promise = this.onInit();
            await this._promise;
            this._isInitialised = true;
        }
        finally {
            // pokud promise spadne, můžu ho znovu zavolat
            this._promise = null;
        }
    }

    protected abstract onInit(): Promise<void>;
    
    public get isInitialised() {
        return this._isInitialised;
    }
}