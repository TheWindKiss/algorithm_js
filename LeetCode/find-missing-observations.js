/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    //模拟构造一个数组，先填充平均值，再将余数放入数组
    const m = rolls.length;
    let sum = mean * (m + n);
    for (let roll of rolls) {
        sum -= roll;
    }
    if (sum < n || sum > n * 6) return [];
    const quotient = Math.floor(sum / n), remainder = sum % n;
    const ans = new Array(n).fill(quotient);
    for (let i = 0; i < n; i++) {
        ans[i] += remainder > i ? 1 : 0;
    }
    return ans;
};
console.log(missingRolls([1, 5, 6], 3, 4))