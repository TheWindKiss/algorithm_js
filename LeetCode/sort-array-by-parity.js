/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    if (nums.length === 0 || nums.length === 1) return nums;
    let l = 0, r = nums.length - 1;
    while (l < r) {
        if ((nums[l] & 1) === 1 && (nums[r] & 1) === 0) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
        while (nums[l] !== undefined & (nums[l] & 1) === 0)
            l++;

        while (nums[r] !== undefined & (nums[r] & 1) === 1)
            r--;

    }
    return nums;
};
console.log(sortArrayByParity([0, 2]))