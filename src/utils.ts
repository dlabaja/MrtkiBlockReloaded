export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export function getRandomItem<T>(list: T[]) {
    return list[getRandomInt(list.length)];
}