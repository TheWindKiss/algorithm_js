/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const n = nums.length;
    let left = 0;
    let right = n-1;
    let i=0;
    while (left <= right) {
        i++
        const mid = (left + right) >> 1;
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    console.log(i)
    return -1
};

console.log(search([1,4,6,10,18,35,42,53,67,71,78,84,92,99], 35))