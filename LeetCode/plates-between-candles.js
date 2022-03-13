/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
/* var platesBetweenCandles = function (s, queries) {
    //超时
    const n = queries.length;
    const ans = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let [l, r] = queries[i];
        while (l < r) {
            if (s[l] !== '|') {
                l++;
            }
            if (s[r] !== '|') {
                r--;
            }
            if (s[l] == '|' && s[r] == '|') {
                let nums = 0;
                for (let j = l; j <= r; j++) {
                    if (s[j] == '*') nums++;
                }
                ans[i] += nums;
                break;
            }
        }
    }
    return ans;
}; */
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
    let n = s.length, len = queries.length;
    const ans = new Array(len).fill(0);
    const arr = []
    for (let i = 0; i < n; i++) {
        if (s[i] == '|') arr.push(i)
    }
    const arrLen = arr.length;
    for (let i = 0; i < len; i++) {
        const [l, r] = queries[i];
        let a = 0, b = arrLen - 1;
        while (a < b) {
            if (arr[a] < l) {
                a++;
            }
            if (arr[b] > r) {
                b--;
            }
            if (arr[a] >= l && arr[b] <= r) {
                ans[i] = arr[b] - arr[a] - (b - a)
                break;
            }
        }
    }
    return ans;
};
console.log(platesBetweenCandles("**|**|***|", [[2,5],[5,9]]))
