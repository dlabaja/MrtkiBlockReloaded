import {Trie} from "../src/scripts/aho-corasick/trie";
import assert from "node:assert";

export function testAhoCorasick() {
    testTutorialExample();
    testSameStart();
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

function testSameStart() {
    const words = ["abc", "abcd"]
    const text = "abcde";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 2 && found.includes("abc") && found.includes("abcd"))
}

function testSameEnd() {
    const words = ["bcd", "abcd"]
    const text = "abcde";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 2 && found.includes("bcd") && found.includes("abcd"))
}

function testWildcard() {
    const words = ["acc", "atc", "cat\0", "gcg"]
    const text = "gcatcg";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 2 && found.includes("catc") && found.includes("atc"))
}