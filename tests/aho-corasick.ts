import {Trie} from "../src/scripts/aho-corasick/trie";
import assert from "node:assert";

export function testAhoCorasick() {
    testTutorialExample();
    testSameEnd();
    testWildcard();
}

// přebráno odsud: https://www.youtube.com/watch?v=O7_w001f58c
function testTutorialExample() {
    const words = ["acc", "atc", "cat", "gcg"]
    const text = "gcatcg";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 2 && found.includes("cat") && found.includes("atc"))
}