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
    const resultObjects = [];
    fs.readdirSync(itemsPath, {recursive: true}).forEach(name => {
        if (!name.endsWith(".json")) {
            return;
        }
        
        try {
            processJson(Path.join(itemsPath, name), resultObjects);
        }
        catch (e) {
            throw new Error(`Cannot process ${name}`)
        }
    })
    
    fs.writeFileSync(outputPath, JSON.stringify(resultObjects), {encoding: "utf-8"});
    fs.writeFileSync(nameListPath, matchesAndReplacements.map(x => `${x[0]} - ${x[1].join("; ")}`).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("\n"), {encoding: "utf-8"})
}

function processJson(path, resultObjects) {
    const instance = JSON.parse(fs.readFileSync(path, { encoding: 'utf8', flag: 'r' }));
    const result = validator.validate(instance, schema);
    if (!result.valid) {
        console.error(`${path} is not valid against schema`);
    }
    matchesAndReplacements.push([instance.name, instance.cases["1"].replacements])
    resultObjects.push(instance)
}

buildData();