import {Trie} from "../src/aho-corasick/trie";

// přebráno odsud: https://www.youtube.com/watch?v=O7_w001f58c
export function testAhoCorasick() {
    const words = ["acc", "atc", "cat", "gcg"]
    const text = "gcatcg";
    const trie = new Trie(words);
    trie.search(text);
}