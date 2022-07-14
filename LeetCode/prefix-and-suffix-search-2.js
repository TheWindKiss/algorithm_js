/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
    //暴力+map存储
    this.map = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            const target = word.slice(j) + '#' + word;
            let node = this.map;
            for (let c of target) {
                if (!node[c]) node[c] = {};
                node = node[c];
                node.w = i;
            }
        }
    }
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
    let node = this.map;
    const target = suff + '#' + pref;
    for (let c of target) {
        if (!node[c]) return -1;
        node = node[c];
    }

    return node.w;
};


/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
const w = new WordFilter(["abbba", "abba"]);
console.log(w.f("ab", "ba"));
