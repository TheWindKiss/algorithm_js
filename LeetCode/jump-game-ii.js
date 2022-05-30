/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    //动态规划找到跳到每一个最少的步数
    const n = nums.length;
    const dp = new Array(n).fill(false);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        let step = dp[i], len = nums[i] + i;
        for (let j = i + 1; j <= len; j++) {
            if (j >= n) break;
            if (!dp[j]) {
                dp[j] = step + 1;
            } else {
                dp[j] = Math.min(step + 1, dp[j]);
            }
        }
    }
    return dp[n - 1];
};
console.log(jump([2, 3, 1, 1, 4]))