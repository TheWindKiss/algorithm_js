/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const n = nums.length;
    let l = 1, r = 1, val = nums[0];
    while (r < n) {
        if (nums[r] != val) {
            val = nums[r];
            nums[l++] = nums[r];
        }
        r++;
    }
    return l;
};
console.log(removeDuplicates([1, 1, 2]))