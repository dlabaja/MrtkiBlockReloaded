import {testAhoCorasick} from "./aho-corasick";
import {testTrieManager} from "./trie-manager";

const testModules = [testAhoCorasick, testTrieManager]

export async function testAll() {
    for (const testModule of testModules) {
        await testModule();
        console.log(`${testModule.name} prošel`)
    }
    console.log("Testy prošly");
}

testAll();