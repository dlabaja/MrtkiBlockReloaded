export const ZWSP = "\u200B";
export const NBSP = " ";

// ořeže string z obou stran
export function trimOne(text: string) {
    if (text.length <= 2) {
        return "";
    }
    return text.slice(1, text.length - 1)
}

export function pad(text: string, padding: string) {
    return `${padding}${text}${padding}`
}

export function firstChar(text: string) {
    if (text.length === 0) {
        return "";
    }
    return text[0];
}

export function lastChar(text: string) {
    if (text.length === 0) {
        return "";
    }
    return text[text.length - 1];
}

// CAT -> [CAT, AT, T]
export function suffixes(text: string) {
    const result: string[] = [];
    for (let i = 0; i < text.length; i++) {
        result.push(text.slice(i, text.length));
    }
    return result;
}