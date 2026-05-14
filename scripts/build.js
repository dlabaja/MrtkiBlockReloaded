import * as fs from "node:fs";
import * as Path from "node:path";

const extensions = ["html", "css", "json", "png", "svg"];
const ignoredFolders = ["types"]
const pathsToRemove = ["assets/icon.svg"] // tady musí být celá cesta z dist, podporuje soubory i složky

function build() {
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

    removeIgnored();
    removeEmptyDirsRec("./dist");
}

function removeIgnored() {
    for (const removeFolder of pathsToRemove) {
        try {
            fs.rmSync(Path.join("./dist", removeFolder), {recursive: true})
        }
        catch (e) {}
    }
}

function removeEmptyDirsRec(path) {
    const isDir = fs.statSync(path).isDirectory();
    if (!isDir) {
        return;
    }
    let files = fs.readdirSync(path);
    if (files.length) {
        for (const file of files) {
            removeEmptyDirsRec(Path.join(path, file));
        }
        files = fs.readdirSync(path);
    }
    
    if (!files.length) {
        fs.rmdirSync(path);
    }
}

build();