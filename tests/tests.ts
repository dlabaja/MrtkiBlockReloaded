import {testAhoCorasick} from "./aho-corasick";
import {testTrieManager} from "./trie-manager";

const testModules = [testAhoCorasick, testTrieManager]

export function testAll() {
    for (const testModule of testModules) {
        testModule();
        console.log(`${testModule.name} prošel`)
    }
    console.log("Testy prošly");
}

testAll();