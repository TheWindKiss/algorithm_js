/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let ans = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        ans[i] = nums[i - 1] * ans[i - 1];
    }
    let right = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        ans[j] = ans[j] * right;
        right *= nums[j];
    }
    return ans
};
console.log(productExceptSelf([1, 2, 3, 4]))