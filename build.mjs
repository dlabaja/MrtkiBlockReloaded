import esbuild from "esbuild";

// celej tenhle garbage javascript ekosystém je tak bloated že sice dokážu celej kód napsat sám, ale s bundlingem mi musel pomoct chat jinak bych se z toho zbláznil

// CONTENT SCRIPT
await esbuild.build({
    entryPoints: ["src/scripts/script.ts"],
    bundle: true,
    format: "iife",
    outfile: "dist/scripts/script.js",
    target: "es2022",
    platform: "browser",
    sourcemap: true,
});

// BACKGROUND
await esbuild.build({
    entryPoints: ["src/scripts/background.ts"],
    bundle: true,
    format: "iife",
    outfile: "dist/scripts/background.js",
    target: "es2022",
    platform: "browser",
    sourcemap: true,
});

console.log("Build done");