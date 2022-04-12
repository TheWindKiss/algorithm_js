/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += getNum(i);
    }
    return ans
};
const getNum = (num) => {
    if (num === 0) return 1;
    let cnt = 9, limit = 10 - num;
    for (let i = 9; i > limit; i--) {
        cnt *= i;
    }
    return cnt;
}