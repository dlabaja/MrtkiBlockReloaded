export const ZWSP = "\u200B";

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

export function toSwappedCase(text: string) {
    const result = [];
    for (const char of text) {
        const upper = char.toUpperCase();
        if (char === upper) {
            result.push(char.toLowerCase());
            continue;
        }
        result.push(upper);
    }
    return result.join();
}