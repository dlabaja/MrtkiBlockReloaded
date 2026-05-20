export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export function getRandomItem<T>(list: T[]) {
    if (!list.length) {
        return undefined;
    }
    return list[getRandomInt(list.length)];
}