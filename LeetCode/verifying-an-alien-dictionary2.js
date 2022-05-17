/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    //思路：遍历词组，将前后两个单词的字母逐一比较判断是否符合oreder。
    const n = words.length;
    let i = 0;
    while (i < n) {
        let j = 0, m = Math.max(words[i].length, words[i + 1].length);
        while (j < m) {
            //相等的情况继续向后判断
            if (order.indexOf(words[i][j]) === order.indexOf(words[i + 1][j])) j++;
            //前一单词的字母顺序更前
            else if (order.indexOf(words[i][j] < order.indexOf(words[i + 1][j]))) break;
            //前一单词无字母或者字母顺序更后
            else return false;
        }
        i++
    }
    return true;
};
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))