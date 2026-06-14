import {Trie} from "../src/scripts/data-structures/aho-corasick/trie";
import assert from "node:assert";

export function testAhoCorasick() {
    testTutorialExample();
    testSameStart();
    testSameEnd();
    testOverlap();
    testWildcard();
    testWildcard2();
}

// přebráno odsud: https://www.youtube.com/watch?v=O7_w001f58c
function testTutorialExample() {
    const words = ["acc", "atc", "cat", "gcg"]
    const text = "gcatcg";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 2 && found.includes("cat") && found.includes("atc"));
}

function testSameStart() {
    const words = ["abc", "abcd"]
    const text = "abcde";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 2 && found.includes("abc") && found.includes("abcd"));
}

// vždycky se vybere to delší slovo, jinak by to nefungovalo jako automat
function testSameEnd() {
    const words = ["bcd", "abcd"]
    const text = "abcde";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 1 && found.includes("abcd"));
}

function testOverlap() {
    const words = ["catc", "catd"]
    const text = "gcatcatdg";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 2 && found.includes("catc") && found.includes("catd"));
}

function testWildcard() {
    const words = ["\0cat\0", "xyz\0"]
    const text = "gcatscatdgxyzwa";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 3 && found.includes("gcats") && found.includes("scatd") && found.includes("xyzw"));
}

function testWildcard2() {
    const words = ["\0Andrej Babiš\0", "\0Babiš\0"]
    const text = " Andrej Babiš;";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 1 && found.includes(" Andrej Babiš;"));
}