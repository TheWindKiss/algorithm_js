/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const n = nums.length;
    let r = 0, l = 0;
    while (r < n) {
        if (nums[r] != val) {
            nums[l++] = nums[r];
        }
        r++;
    }
    return l;
};
console.log(removeElement([3, 3], 3))