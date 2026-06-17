import {Data} from "../../../src/scripts/interfaces/data";

export class DataFetchManagerMock {
    private _data: Data[];
    
    constructor(words: string[]) {
        this._data = [{
            name: "",
            sourceName: "",
            matchUpperCase: false,
            matchLowerCase: false,
            cases: {
                1: {
                    matches: [...words],
                    replacements: []
                },
                2: {
                    matches: [],
                    replacements: []
                },
                3: {
                    matches: [],
                    replacements: []
                },
                4: {
                    matches: [],
                    replacements: []
                },
                5: {
                    matches: [],
                    replacements: []
                },
                6: {
                    matches: [],
                    replacements: []
                },
                7: {
                    matches: [],
                    replacements: []
                }
            }
        }]
    }

    public get data(): Data[] {
        return this._data || [];
    }
}