/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const ans = [], n = candidates.length;
    const backTrack = (idx, sum, path) => {
        if (sum > target) return;
        if (sum == target) return ans.push(path.slice());
        for (let i = idx; i < n; i++) {
            if (i > idx && candidates[i] === candidates[i - 1]) continue;
            sum += candidates[i];
            path.push(candidates[i]);
            backTrack(i + 1, sum, path);
            path.pop();
            sum -= candidates[i];
        }
    }
    candidates.sort((a, b) => a - b);
    backTrack(0, 0, []);
    return ans;
};