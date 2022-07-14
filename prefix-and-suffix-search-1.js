/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
    //这个会超时，自己连续字典树用的
    this.tr1 = new Trie();
    this.tr2 = new Trie();
    for (let [i, word] of words.entries()) {
        this.tr1.add(word, i, false);
        this.tr2.add(word, i, true);
    }
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
    const l1 = this.tr1.query(pref, false), l2 = this.tr2.query(suff, true), n = l1.length, m = l2.length;
    if (l1 == -1 || l2 == -1) return -1;
    for (let i = n - 1, j = m - 1; i >= 0 && j >= 0;) {
        if (l1[i] > l2[j]) i--;
        else if (l1[i] < l2[j]) j--;
        else return l1[i];
    }
};

class Trie {
    constructor() {
        this.node = [];
        this.idxs = [];
    }
    add(s, idx, isTurn) {
        //从效率考虑上将尾部构造字典树的标识放到这里。
        const n = s.length;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let cur = this;
        for (let i = isTurn ? n - 1 : 0; i >= 0 && i < n; i += isTurn ? -1 : 1) {
            const code = s[i].charCodeAt() - 'a'.charCodeAt();
            if (cur.node[code] == null) cur.node[code] = new Trie();
            cur = cur.node[code];
            cur.idxs.push(idx);
        }
    }
    query(str, isTurn) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let n = str.length, cur = this;
        for (let i = isTurn ? n - 1 : 0; i >= 0 && i < n; i += isTurn ? -1 : 1) {
            const code = str[i].charCodeAt() - 'a'.charCodeAt();
            if (cur.node[code] == null) return -1;
            cur = cur.node[code];
        }
        return cur.idxs;
    }
}
/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
const w = new WordFilter(["abbba", "abba"]);
console.log(w.f("ab", "ba"));
