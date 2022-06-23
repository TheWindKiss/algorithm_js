/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    //思路：首先明确所有的单词都是同一长度的，使用滑动窗口，每次滑动距离为单词长度，用两个哈希表，一个记录要求单词，一个记录滑动窗口中的单词。
    //当出现不在哈希表中的单词时，交换左端点值并重置参数。
    //当出现滑动窗口中的某一单词数大于要求单词时，左端点右移，直到这一单词数相等为止。
    //当存在与单词数相同并且单词种类相同的时候记录左窗口位置。

    const ans = [];
    const n = s.length, len = words[0].length, nums = words.length, total = len * nums;
    if (s == null || words.length == 0 || n < total) return ans;
    const map = new Map();
    for (let word of words) {
        if (s.indexOf(word) == -1) return ans;
        map.set(word, (map.get(word) || 0) + 1);
    }
    for (let i = 0; i < len; i++) {
        let l = i, r = i, cnt = 0, haseWords = new Map();
        while (r + len <= n) {
            let oneWord = s.substring(r, r + len);
            r += len;
            if (!map.has(oneWord)) {
                l = r;
                cnt = 0;
                haseWords.clear();
            } else {
                haseWords.set(oneWord, (haseWords.get(oneWord) || 0) + 1);
                cnt++;
                while (haseWords.get(oneWord) > map.get(oneWord)) {
                    let del = s.substring(l, l + len);
                    l += len;
                    haseWords.set(del, (haseWords.get(del) || 0) - 1);
                }
                if (nums == cnt) ans.push(l);
            }
        }
    }
    return ans;
}
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))