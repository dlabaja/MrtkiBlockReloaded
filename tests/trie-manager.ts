import {ZWSP} from "../src/scripts/utils/string-utils";
import assert from "node:assert";
import {TrieManager} from "../src/scripts/managers/trie-manager";
import {DataManager} from "../src/scripts/managers/data-manager";
import {ConfigManagerBackground} from "../src/scripts/managers/config-manager/config-manager-background";
import {StorageManagerMock} from "./mocks/managers/storage-manager.mock";
import {DataFetchManager} from "../src/scripts/managers/data-fetch-manager";
import {StorageManager} from "../src/scripts/managers/storage-manager";
import {DataFetchManagerMock} from "./mocks/managers/data-fetch-manager.mock";

async function getTrieManager(words: string[]) {
    const storageManager = new StorageManagerMock() as unknown as StorageManager;
    const configManager = new ConfigManagerBackground(storageManager);
    const dataFetchManager = new DataFetchManagerMock(words) as unknown as DataFetchManager;
    const dataManager = new DataManager(configManager, dataFetchManager);
    const trieManager = new TrieManager(dataManager);
    await dataManager.init();
    await trieManager.init();
    return trieManager;
} 

export function testTrieManager() {
    testWildcard3();
    testWildcard4();
    testWildcard5();
    testEndInMiddle();
    testTextInBrackets();
    testMatchesAfterEachOther();
}

async function testWildcard3() {
    const words = ["Babiše", "Andreje Babiše", "ve andreji babišovi", "na Babišovi"]
    const text = " Andreje Babiše";
    const trieManager = await getTrieManager(words);
    const found = trieManager.search(text);
    assert(found.length == 1 && found.includes(` Andreje Babiše${ZWSP}`));
}

async function testWildcard4() {
    const words = ["Babiše", "Andreje Babiše", "ve andreji babišovi",]
    const text = "    vidím Andreje Babiše";
    const trieManager = await getTrieManager(words);
    const found = trieManager.search(text);
    assert(found.length == 1 && found.includes(` Andreje Babiše${ZWSP}`));
}

// kvůli tomuhle testu musím všechny mezery replacnout wildcardem
async function testWildcard5() {
    const words = ["na Babišovi", "Babišově"]
    const text = "na Babišově farmě";
    const trieManager = await getTrieManager(words);
    const found = trieManager.search(text);
    assert(found.length == 1 && found.includes(" Babišově "));
}

// musí tam být wildcard místo mezer, tak jak je to výš
async function testEndInMiddle() {
    const words = ["Motoristé sobě", "Motoristé",]
    const text = ";Motoristé potom";
    const trieManager = await getTrieManager(words);
    const found = trieManager.search(text);
    assert(found.length == 1 && found.includes(";Motoristé "));
}

async function testTextInBrackets() {
    const words = ["Tomio Okamura", "SPD"]
    const text = "(SPD)";
    const trieManager = await getTrieManager(words);
    const found = trieManager.search(text);
    assert(found.length == 1 && found.includes("(SPD)"));
}

async function testMatchesAfterEachOther() {
    const words = ["Tomio Okamura", "Okamura", "SPD"]
    const text = " Tomio Okamura (SPD)";
    const trieManager = await getTrieManager(words);
    const found = trieManager.search(text);
    assert(found.length == 2 && found.includes(" Tomio Okamura ") && found.includes("(SPD)"));
}