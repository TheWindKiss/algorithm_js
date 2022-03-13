/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0];
    //动态规划的思想，pre为当前下标前的最大子数组和
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))