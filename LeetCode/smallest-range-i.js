/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestRangeI = function(nums, k) {
    let max=Math.max(...nums),min=Math.min(...nums);
    return max-min<=2*k?0:max-min-2*k;
};