import {Trie, WILDCARD} from "../src/scripts/data-structures/aho-corasick/trie";
import assert from "node:assert";
import {pad, ZWSP} from "../src/scripts/utils/string-utils";

export function testAhoCorasick() {
    testTutorialExample();
    testSameStart();
    testSameEnd();
    testOverlap();
    testWildcard();
    testWildcard2();
    testWildcard3();
    testWildcard4();
    testWildcard5();
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
    const words = [`${WILDCARD}cat${WILDCARD}`, `xyz${WILDCARD}`]
    const text = "gcatscatdgxyzwa";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 3 && found.includes("gcats") && found.includes("scatd") && found.includes("xyzw"));
}

function testWildcard2() {
    const words = [`${WILDCARD}Andrej Babiš${WILDCARD}`, `${WILDCARD}Babiš${WILDCARD}`]
    const text = " Andrej Babiš;";
    const trie = new Trie(words);
    const found = trie.search(text);
    assert(found.length == 1 && found.includes(" Andrej Babiš;"));
}

function testWildcard3() {
    const words = ["Babiše", "Andreje Babiše", 
        "ve andreji babišovi", 
        "na Babišovi"
    ]
    const text = " Andreje Babiše";
    const trie = new Trie(words.map(x => pad(x, WILDCARD)));
    const found = trie.search(pad(text, ZWSP));
    assert(found.length == 1 && found.includes(` Andreje Babiše${ZWSP}`));
}

function testWildcard4() {
    const words = ["Babiše", "Andreje Babiše",
        "ve andreji babišovi",
    ]
    const text = "    vidím Andreje Babiše";
    const trie = new Trie(words.map(x => pad(x, WILDCARD)));
    const found = trie.search(pad(text, ZWSP));
    assert(found.length == 1 && found.includes(` Andreje Babiše${ZWSP}`));
}

// kvůli tomuhle testu musím všechny mezery replacnout wildcardem
function testWildcard5() {
    const words = ["na Babišovi", "Babišově"]
    const text = "na Babišově farmě";
    const trie = new Trie(words.map(x => pad(x, WILDCARD).replace(" ", WILDCARD)));
    const found = trie.search(pad(text, ZWSP));
    assert(found.length == 1 && found.includes(" Babišově "));
}