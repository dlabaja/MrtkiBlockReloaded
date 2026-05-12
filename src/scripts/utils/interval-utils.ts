export interface Interval {
    start: number,
    end: number
}

export function intersectsInterval(start: number, end: number, intervals: Interval[]) {
    for (const interval of intervals) {
        if (inInterval(start, interval) || inInterval(end, interval)) {
            return true;
        }
    }
    return false;
}

export function inInterval(number: number, interval: Interval) {
    return number >= interval.start && number <= interval.end;
}