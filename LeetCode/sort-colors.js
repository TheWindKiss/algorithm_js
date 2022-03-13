/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let n = nums.length;
    if (n < 2) {
        return nums
    }
    let p1 = 0;
    let p2 = n - 1;
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            nums[i] = nums[p1];
            nums[p1] = 0;
            p1++;
        }
        if (nums[i] == 2) {
            nums[i] = nums[p2];
            nums[p2] = 2;
            p2--;
            if (nums[i] != 1) {
                i--;
            }
        }
    }
    return nums
};

console.log(sortColors([2, 0, 2, 1, 1, 0]))