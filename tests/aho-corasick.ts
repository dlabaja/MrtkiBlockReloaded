import {Trie} from "../src/scripts/aho-corasick/trie";

export function testAhoCorasick() {
    testTutorialExample();
}

// přebráno odsud: https://www.youtube.com/watch?v=O7_w001f58c
function testTutorialExample() {
    const words = ["acc", "atc", "cat", "gcg"]
    const text = "gcatcg";
    const trie = new Trie(words);
    trie.search(text);
}