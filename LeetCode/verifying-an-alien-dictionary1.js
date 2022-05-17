/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    //思路：自己通过order对副本进行排序。比较和原本是否有差距。
    const index = new Array(26).fill(0);
    for (let i = 0; i < 26; i++) {
        index[order[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }
    const copy = words.slice(0);
    copy.sort((a, b) => {
        let n = a.length, m = b.length, i = 0, j = 0;
        while (i < n & j < m) {
            let c1 = a[i].charCodeAt() - 'a'.charCodeAt(), c2 = b[i].charCodeAt() - 'a'.charCodeAt();
            if (c1 != c2) return index[c1] - index[c2];
            i++;
            j++;
        }
        if (i < n) return 1;
        if (j < m) return -1;
    })
    const n = words.length
    for (let i = 0; i < n; i++) {
        if (copy[i] !== words[i]) return false;
    }
    return true;
};
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))