/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    //跟组合总和II很相似,但是多了一个数组保存访问过的位置
    const n = nums.length, ans = [], visited = new Array(n).fill(false);
    const backTrack = (idx, arr) => {
        if (idx === n) {
            ans.push(arr.slice());
            return
        }
        for (let i = 0; i < n; i++) {
            if (visited[i] || (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1])) continue;
            arr.push(nums[i]);
            visited[i] = true;
            backTrack(idx + 1, arr);
            visited[i] = false;
            arr.pop();
        }
    }
    nums.sort((a, b) => a - b);
    backTrack(0, []);
    return ans;
};
console.log(permuteUnique([1, 1, 2]))