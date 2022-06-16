/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    //思路：排序+二分法。
    //首先对数组进行排序，然后使用二分法寻找对应的值，记得去重。
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        const target = nums[i] + k;
        let l = i + 1, r = n - 1;
        while (l < r) {
            let mid = (l + r + 1) >> 1;
            if (nums[mid] <= target) l = mid;
            else r = mid - 1;
        }
        cnt += (nums[l] === target ? 1 : 0);
    }
    return cnt;
};
console.log(findPairs([1, 1, 1, 1, 1], 0))