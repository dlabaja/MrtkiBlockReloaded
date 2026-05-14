import * as fs from "node:fs";

export function clean() {
    try {
        fs.rmSync("./dist", {recursive: true})
    }
    catch (e) {}
}

clean();