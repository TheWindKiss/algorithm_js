/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    const n = nums.length;
    const rec = new Array(n + 2).fill(-1).map(() => new Array(n + 2).fill(-1));
    const val = new Array(n + 2);

    const solve = (left, right) => {
        if (left >= right - 1) {
            return 0;
        }
        if (rec[left][right] != -1) {
            return rec[left][right]
        }
        for (let i = left + 1; i < right; i++) {
            let result = val[left] * val[i] * val[right];
            result += solve(left, i) + solve(i, right);
            rec[left][right] = Math.max(rec[left][right], result);
        }
        return rec[left][right];
    }

    for (let i = 1; i <= n; i++) {
        val[i] = nums[i - 1];
    }
    val[0] = val[n + 1] = 1;
    return solve(0, n + 1);
};

console.log(maxCoins([3, 1, 5, 8]))