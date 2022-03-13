/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxStep = 0;
    let flag = true;
    for (let i = 0; i < nums.length; i++) {

        maxStep = Math.max(nums[i] + i, maxStep);

        if (maxStep <= i&&i!==nums.length-1) {
            flag = !flag;
            break;
        }
        console.log(maxStep)
    }
    return flag;
};
console.log(canJump([0]))