import * as fs from "node:fs";
import * as Path from "node:path";
import {Validator} from "jsonschema";

const itemsPath = "./data/items";
const outputPath = "./data/data2.json";
const schemaPath = "./data/item.schema.json";
const nameListPath = "./data/name-list.txt";
const schema = JSON.parse(fs.readFileSync(schemaPath, { encoding: 'utf8', flag: 'r' }))
const validator = new Validator();
const matchesAndReplacements = [];

function buildData() {
    const jsonItems = [];
    fs.readdirSync(itemsPath, {recursive: true}).forEach(name => {
        if (!name.endsWith(".json")) {
            return;
        }
        
        try {
            processJsonItem(Path.join(itemsPath, name), jsonItems);
        }
        catch (e) {
            throw new Error(`Cannot process ${name}`)
        }
    })
    
    fs.writeFileSync(outputPath, generateJson(jsonItems), {encoding: "utf-8"});
    fs.writeFileSync(nameListPath, matchesAndReplacements.map(x => `${x[0]} - ${x[1].join("; ")}`).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("\n"), {encoding: "utf-8"})
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
    return JSON.stringify({
        timestamp: new Date().toISOString(),
        items: jsonItems
    })
}

buildData();