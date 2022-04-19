/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    //两次遍历,一次填充到左边相邻c的距离，另一次填充右边相邻c的距离与前一次遍历的最小值。
    const n = s.length;
    const ans = new Array(n).fill(0);
    for (let i = 0, idx = -n; i < n; i++) {
        if (s[i] === c) {
            idx = i;
        }
        ans[i] = i - idx;
    }
    for (let i = n - 1, idx = 2 * n; i >= 0; i--) {
        if (s[i] === c) {
            idx = i;
        }
        ans[i] = Math.min(ans[i], idx - i);
    }
    return ans;
};

console.log(shortestToChar('abaa', 'b'))
