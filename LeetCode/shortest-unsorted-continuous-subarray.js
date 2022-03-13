/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
 /*    if (nums.length == 1) {
        return 0;
    }
    let left = 0;
    let right = nums.length - 1;
    while (nums[left] <= nums[left + 1]) {
        left++;
    }
    const temp1 = nums.slice(left);
    let count = 0;
    while (nums[right] >= nums[right - 1]) {
        if (nums[right] == nums[right - 1]) {
            count++;
        }
        if (nums[right] > nums[right - 1]) {
            count = 0;
        }
        right--;
    }
    console.log(count)
    console.log(temp1.slice(0, right))
    const ans = right === nums.length - 1 ? temp1.slice(0, right).length + 1 : right === 0 ? temp1.slice(0, right).length : temp1.slice(0, right).length + count;
    return ans
 */
    const n = nums.length;
    let maxn = -Number.MAX_VALUE, right = -1;
    let minn = Number.MAX_VALUE, left = -1;
    for (let i = 0; i < n; i++) {
        if (maxn > nums[i]) {
            right = i;
        } else {
            maxn = nums[i];
        }
        if (minn < nums[n - i - 1]) {
            left = n - i - 1;
        } else {
            minn = nums[n - i - 1];
        }
    }
    return right === -1 ? 0 : right - left + 1;
};

console.log(findUnsortedSubarray([2,1,1,1,1]))