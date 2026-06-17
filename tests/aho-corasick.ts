import {Trie} from "../src/scripts/data-structures/aho-corasick/trie";
import assert from "node:assert";

export function testAhoCorasick() {
    testTutorialExample();
    testSameStart();
    testSameEnd();
    testOverlap();
}

// přebráno odsud: https://www.youtube.com/watch?v=O7_w001f58c
function testTutorialExample() {
    const words = ["acc", "atc", "cat", "gcg"]
    const text = "gcatcg";
    const trie = new Trie(words);
    const found = trie.search(text).map(x => x.content);
    assert(found.length == 2 && found.includes("cat") && found.includes("atc"));
}

function testSameStart() {
    const words = ["abc", "abcd"]
    const text = "abcde";
    const trie = new Trie(words);
    const found = trie.search(text).map(x => x.content);
    assert(found.length == 2 && found.includes("abc") && found.includes("abcd"));
}

// vždycky se vybere to delší slovo, jinak by to nefungovalo jako automat
function testSameEnd() {
    const words = ["bcd", "abcd"]
    const text = "abcde";
    const trie = new Trie(words);
    const found = trie.search(text).map(x => x.content);
    assert(found.length == 1 && found.includes("abcd"));
}

function testOverlap() {
    const words = ["catc", "catd"]
    const text = "gcatcatdg";
    const trie = new Trie(words);
    const found = trie.search(text).map(x => x.content);
    assert(found.length == 2 && found.includes("catc") && found.includes("catd"));
}

