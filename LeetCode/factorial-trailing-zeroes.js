/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    //尾零的数量是因子2和因子5的数量中较少的那个，又能知道因子5的数量少于因子2。
    //所以题目就等价于求因子5的数量。
    if (n <= 4) return 0;
    let ans = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        ans += n;
    }
    return ans;
};
console.log(trailingZeroes(5))