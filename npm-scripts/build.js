import esbuild from "esbuild";
import * as fs from "node:fs";
import * as Path from "node:path";

// celej tenhle garbage javascript ekosystém je tak bloated, že sice dokážu celej kód napsat sám, ale s bundlingem mi musel pomoct chat jinak bych se z toho zbláznil

const target = process.argv[2]; // chrome/firefox

if (target !== "firefox" && target !== "chrome") {
    console.log(target)
    process.exit(1);
}

// CONTENT SCRIPT
await esbuild.build({
    entryPoints: ["src/scripts/content-script/content-script.ts"],
    bundle: true,
    format: "iife",
    outfile: `dist/${target}/scripts/content-script/content-script.js`,
    target: "es2022",
    platform: "browser",
    sourcemap: true,
});

// BACKGROUND
await esbuild.build({
    entryPoints: ["src/scripts/background/background.ts"],
    bundle: true,
    format: "iife",
    outfile: `dist/${target}/scripts/background/background.js`,
    target: "es2022",
    platform: "browser",
    sourcemap: true,
});

// POPUP
await esbuild.build({
    entryPoints: ["src/scripts/popup/popup.ts"],
    bundle: true,
    format: "iife",
    outfile: `dist/${target}/scripts/popup/popup.js`,
    target: "es2022",
    platform: "browser",
    sourcemap: true,
});

const pathsToCopy = ["assets", "scripts/popup/popup.css", "scripts/popup/popup.html", "manifest.json"]
const distPath = Path.join("./dist", target)
const srcPath = "./src";

function copyFiles() {
    for (const path of pathsToCopy) {
        fs.cpSync(Path.join(srcPath, path), Path.join(distPath, path), {
            recursive: true
        })
    }
}

function replaceManifest() {
    if (target !== "chrome") {
        return;
    }
    
    const path = Path.join(distPath, "manifest.json");
    let content = fs.readFileSync(path, {encoding: "utf-8"})
    content = content.replace("\"scripts\": [\"scripts/background/background.js\"]", "\"service_worker\": \"scripts/background/background.js\"")
    fs.writeFileSync(path, content)
}

copyFiles();
replaceManifest();

console.log(`Build for ${target} done`);