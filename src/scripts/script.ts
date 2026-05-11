function borderedMatches(matches: string[], boundaries: string[]) {
    const res = [];
    for (const prefix in boundaries) {
        for (const postfix in boundaries) {
            for (const match in matches) {
                res.push(`${prefix}${match}${postfix}`);
            }
        }
    }
    return res;
}