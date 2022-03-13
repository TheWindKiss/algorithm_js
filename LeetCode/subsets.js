/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let n = nums.length;
    let ans = []
    for (let i = 0; i < (1 << n); i++) {
        const arr = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                arr.push(nums[j])
            }
        }
        ans.push(arr)
    }
    return ans
};

console.log(subsets([1, 2, 3]))