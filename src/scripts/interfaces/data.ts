export interface Data {
    name: string,
    sourceName: string,
    matchUpperCase: boolean,
    matchLowerCase: boolean,
    cases: {
        1: DataDeclension,
        2: DataDeclension,
        3: DataDeclension,
        4: DataDeclension,
        5: DataDeclension,
        6: DataDeclension,
        7: DataDeclension,
    },
    adjectives?: {
        to: DataDeclension,
        ta: DataDeclension,
        ten: DataDeclension,
        ti: DataDeclension,
        ty: DataDeclension,
        te: DataDeclension,
        tu: DataDeclension,
        tou: DataDeclension,
        tim: DataDeclension,
        tech: DataDeclension,
        temi: DataDeclension
    }
}

export interface DataDeclension {
    matches: string[],
    replacements: string[]
}