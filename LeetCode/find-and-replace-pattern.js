/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    const ans = [];
    for (let word of words) {
        if (match(word, pattern) && match(pattern, word)) {
            ans.push(word);
        }
    }
    return ans;
}
const match = (word, pattern) => {
    const map = new Map(), n = word.length;
    for (let i = 0; i < n; i++) {
        const x = word[i], y = pattern[i];
        if (!map.has(x)) {
            map.set(x, y);
        } else if (map.get(x) !== y) {
            return false;
        }
    }
    return true;
}
console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"))