/**
 * @param {string[]} words
 * @return {string}
 */
const CODEA = 'a'.charCodeAt();
var longestWord = function (words) {
    /* //1.直接找值
     words.sort((a, b) => {
         if (a.length !== b.length) {
             return a.length - b.length;
         } else {
             return b.localeCompare(a);
         }
     })
     let ans = '';
     let set = new Set(['']);
     for (let word of words) {
         if (set.has(word.slice(0, word.length - 1))) {
             set.add(word);
             ans = word;
         }
     }
     return ans; */
    const trie = new Trie();
    for (let ch of words) {
        trie.insert(ch);
    }
    let ans = '';
    for (let word of words) {
        if (trie.search(word)) {
            if (word.length > ans.length || (word.length === ans.length && word.localeCompare(ans) < 0)) {
                ans = word;
            }
        }
    }
    return ans;

};
/* class Node {
    constructor() {
        this.children = new Array(26);
        this.isEnd = false;
    }
} */
class Trie {
    constructor() {
        this.root = {};
        this.isEnd = false;
    }
    insert(word) {
        let node = this.root;
        console.log(node);
        for (let ch of word) {
            let index = ch.charCodeAt() - CODEA;
            if (!node[index]) {
                node[index] = {}
            }
            node = node[index];
        }
        node.isEnd = true;
    }
    search(word) {
        let node = this.root;
        for (let ch of word) {
            const index = ch.charCodeAt() - CODEA;
            if (!node[index] || !node[index].isEnd) {
                return false;
            }
            node = node[index];
        }
        return true;
    }
}
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]))