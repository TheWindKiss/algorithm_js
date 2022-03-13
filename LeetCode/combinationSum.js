/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let index = 0;
    let rest = target;
    let ans = [];
    let arr = [];
    dfs(candidates, index, rest, ans, arr)
    return ans
};

function dfs(candidates, index, rest, ans, arr) {
    if (index == candidates.length) {
        return
    }
    if (rest == 0) {
        ans.push(arr)
        return
    }
    dfs(candidates, index + 1, rest, ans, arr)
    if (rest - candidates[index] >= 0) {
        dfs(candidates, index, rest - candidates[index], ans, [...arr, candidates[index]])
    }
}
console.log(combinationSum([2, 3, 6, 7], 7))