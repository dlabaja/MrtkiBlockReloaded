import * as fs from "node:fs";

const extensions = ["html", "css", "json", "png", "svg"];
const ignoredFolders = ["types"]

export function build() {
    fs.cpSync("./src", "./dist", {
        recursive: true,
        filter: (path) => {
            if (fs.statSync(path).isDirectory()) {
                for (let i = 0; i < ignoredFolders.length; i++) {
                    if (path.endsWith(`/${ignoredFolders[i]}`)) {
                        return false;
                    }
                }
                return true;
            }
            for (let i = 0; i < extensions.length; i++) {
                if (path.endsWith(extensions[i])) {
                    return true;
                }
            }
        }
    })
}

build();