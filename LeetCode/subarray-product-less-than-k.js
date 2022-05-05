/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    //思路：简单的滑动窗口，将右端点固定会更简易一些。
    //具体：遍历数组，每次将窗口右端点固定（i），然后从左侧开始滑动（j），直到窗口中的值乘积（pro）严格小于k，此时的子数组数为i-j+1;

    //有k=1和k=0的用例直接返回0，用例都是正整数，k<=1不可能会有严格小于的情况
    if (k <= 1) return 0;
    const n = nums.length;
    let ans = 0, pro = 1, j = 0;
    for (let i = 0; i < n; i++) {
        pro *= nums[i];
        while (pro >= k) {
            pro /= nums[j++];
        }
        ans += i - j + 1;
    }
    return ans;
};
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))