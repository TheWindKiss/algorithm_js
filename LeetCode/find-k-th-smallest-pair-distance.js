/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    //思路：排序然后对数对距离进行二分查找，一开始是数对总数，不断二分，找到数量正好为k的数对，边界值即为所求。
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let l = 0, r = nums[n - 1] - nums[0]
    while (l < r) {
        let mid = Math.floor((l + r) / 2), cnt = 0, j = 0;
        for (let i = 1; i < n; i++) {
            while (nums[i] - nums[j] > mid) j++;
            cnt += i - j
        }
        if (cnt < k) l = mid + 1;
        else r = mid;
    }
    return l;
};