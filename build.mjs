import esbuild from "esbuild";

// celej tenhle garbage javascript ekosystém je tak bloated že sice dokážu celej kód napsat sám, ale s bundlingem mi musel pomoct chat jinak bych se z toho zbláznil

// CONTENT SCRIPT
await esbuild.build({
    entryPoints: ["src/scripts/content-script/content-script.ts"],
    bundle: true,
    format: "iife",
    outfile: "dist/scripts/content-script/content-script.js",
    target: "es2022",
    platform: "browser",
    sourcemap: true,
});

// BACKGROUND
await esbuild.build({
    entryPoints: ["src/scripts/background/background.ts"],
    bundle: true,
    format: "iife",
    outfile: "dist/scripts/background/background.js",
    target: "es2022",
    platform: "browser",
    sourcemap: true,
});

// POPUP
await esbuild.build({
    entryPoints: ["src/popup/popup.ts"],
    bundle: true,
    format: "iife",
    outfile: "dist/popup/popup.js",
    target: "es2022",
    platform: "browser",
    sourcemap: true,
});

console.log("Build done");