/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    const trie = new Trie();
    for (let word of dictionary) {
        trie.add(word);
    }
    const words = sentence.split(' '), n = words.length;
    for (let i = 0; i < n; i++) {
        words[i] = find(words[i], trie);
    }
    return words.join(' ');
};
const find = (word, trie) => {
    let root = '', cur = trie, n = word.length;
    for (let i = 0; i < n; i++) {
        const c = word[i];
        if (cur.end) {
            return root;
        }
        if (!cur.children.has(c)) {
            return word;
        }
        root += c;
        cur = cur.children.get(c);

    }
    return root;
}
class Trie {
    constructor() {
        this.children = new Map();
        this.end = false;
    }
    add(word) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let cur = this;
        for (let c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new Trie());
            }
            cur = cur.children.get(c);
        }
        cur.end = true;
    }
}
console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"))