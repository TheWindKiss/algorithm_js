/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let output = Array.from(nums);
    let ans = [];

    backtrackf(nums.length, output, ans, 0)
    return ans;
};

function backtrackf(n, output, ans, first) {
    if (first == n) {
        ans.push(Array.from(output))
        return ans
    }
    for (let i = first; i < n; i++) {
        swap(output, first, i);
        backtrackf(n, output, ans, first + 1);
        swap(output, first, i);
    }
}
function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(permute([1, 2, 3]))