/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    //思路：将数组排序完分成等量两块，按照先放一块小的再放一块大的顺序放置，从数据块尾部开始检数。
    const arr = nums.slice(), n = nums.length;
    const idx = (n + 1) >> 1;
    arr.sort((a, b) => a - b);
    for (let i = 0, j = idx - 1, k = n - 1; i < n; i += 2, j--, k--) {
        nums[i] = arr[j];
        if (i + 1 < n) {
            nums[i + 1] = arr[k];
        }
    }

}