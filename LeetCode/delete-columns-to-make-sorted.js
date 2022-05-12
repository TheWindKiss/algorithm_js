/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    const n = strs.length, m = strs[0].length;
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            console.log(strs[j][i])
            if (strs[j - 1][i] > strs[j][i]) {
                ans++;
                break;
            }
        }
    }
    return ans;
};
console.log(minDeletionSize(["asfrgad", "ashjkys", "tshtcnr"]))

