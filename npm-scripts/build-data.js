import * as fs from "node:fs";
import * as Path from "node:path";
import {Validator} from "jsonschema";

const schemaPath = "./data/item.schema.json";
const schema = JSON.parse(fs.readFileSync(schemaPath, { encoding: 'utf8', flag: 'r' }))
const validator = new Validator();
const matchesAndReplacements = [];

function buildData(path, outputPath, nameListPath) {
    const jsonItems = [];
    fs.readdirSync(path, {recursive: true}).forEach(name => {
        if (!name.endsWith(".json")) {
            return;
        }
        
        try {
            processJsonItem(Path.join(path, name), jsonItems);
        }
        catch (e) {
            throw new Error(`Cannot process ${name}`)
        }
    })
    
    fs.writeFileSync(outputPath, generateJson(jsonItems), {encoding: "utf-8"});
    if (nameListPath) {
        fs.writeFileSync(nameListPath, matchesAndReplacements.map(x => `${x[0]} - ${x[1].join("; ")}`).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("\n"), {encoding: "utf-8"});
    }
}

function processJsonItem(path, jsonItems) {
    const instance = JSON.parse(fs.readFileSync(path, { encoding: 'utf8', flag: 'r' }));
    const result = validator.validate(instance, schema);
    if (!result.valid) {
        console.error(`${path} is not valid against schema`);
    }
    matchesAndReplacements.push([instance.name, instance.cases["1"].replacements])
    jsonItems.push(instance)
}

function generateJson(jsonItems) {
    return JSON.stringify(jsonItems);
}

buildData("./data/items", "./data/data.json", "./data/name-list.txt");
buildData("./data/other-sources/microslop/items", "./data/other-sources/microslop/data.json")