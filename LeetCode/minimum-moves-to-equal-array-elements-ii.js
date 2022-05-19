/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    //通过排序找到中位数（不是平均数），计算每个数到中位数的距离之和就是答案。
    let n = nums.length, x = quickSelect(nums, 0, n - 1, Math.floor(n / 2)), ret = 0;
    for (let i = 0; i < n; ++i) {
        ret += Math.abs(nums[i] - x);
    }
    return ret;
};
const quickSelect = (nums, left, right, index) => {
    const q = randomPartition(nums, left, right);
    if (q === index) return nums[q];
    else return q < index ? quickSelect(nums, q + 1, right, index) : quickSelect(nums, left, q - 1, index);
}

const randomPartition = (nums, left, right) => {
    const i = Math.floor(Math.random() * (right - left + 1)) + left;
    swap(nums, i, right);
    return partition(nums, left, right);
}
const partition = (nums, left, right) => {
    let x = nums[right], i = left - 1;
    for (let j = left; j < right; j++) {
        if (nums[j] <= x) {
            i++;
            swap(nums, i, j);
        }
    }
    swap(nums, i + 1, right);
    return i + 1;
}
const swap = (nums, index1, index2) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}
console.log(minMoves2([1, 2, 3]))