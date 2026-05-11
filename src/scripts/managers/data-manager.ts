export interface Data {
    name: string,
    cases: {
        1: DataCase,
        2: DataCase,
        3: DataCase,
        4: DataCase,
        5: DataCase,
        6: DataCase,
        7: DataCase,
    }
}

interface DataCase {
    matches: string[],
    replacements: string[]
}

export class DataManager {
    private _data: Data[] = [];
    public matches: string[] = [];
    // udělat set, kde pro každej match budou replacements

    public async init() {
        const response = await fetch(
            "https://raw.githubusercontent.com/dlabaja/MrtkiBlockReloaded/refs/heads/master/data/data.json");
        this._data = await response.json() as Data[]
        this.matches = this.getAllMatches();
    }

    private getAllMatches() {
        let res: string[] = []
        if (!this._data) {
            return res;
        }
        for (const item of this._data) {
            res = res.concat(this.getAllMatchesFromItem(item))
        }
        return res;
    }

    private getAllMatchesFromItem(data: Data) {
        return [
            ...data.cases["1"].matches,
            ...data.cases["2"].matches,
            ...data.cases["3"].matches,
            ...data.cases["4"].matches,
            ...data.cases["5"].matches,
            ...data.cases["6"].matches,
            ...data.cases["7"].matches,
        ]
    }
}