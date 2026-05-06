export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomItem(list) {
    return list[getRandomInt(list.length)];
}