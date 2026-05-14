import * as fs from "node:fs";
import * as Path from "node:path";
import {Validator} from "jsonschema";

const itemsPath = "./data/items";
const outputPath = "./data/data.json"
const schemaPath = "./data/items.schema.json"
const schema = JSON.parse(fs.readFileSync(schemaPath, { encoding: 'utf8', flag: 'r' }))
const validator = new Validator();

function buildData() {
    const resultObjects = [];
    fs.readdirSync(itemsPath).forEach(name => {
        if (!name.endsWith(".json")) {
            return;
        }
        
        processJson(Path.join(itemsPath, name), resultObjects);
    })
    
    fs.writeFileSync(outputPath, JSON.stringify(resultObjects, null, 2));
}

function processJson(path, resultObjects) {
    const instance = JSON.parse(fs.readFileSync(path, { encoding: 'utf8', flag: 'r' }));
    const result = validator.validate(instance, schema);
    if (!result.valid) {
        console.error(`${path} is not valid against schema`);
    }
    resultObjects.push(instance)
}

buildData();