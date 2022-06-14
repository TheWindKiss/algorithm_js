/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    //用折半法，将 n进行折半，最后总是会变0的，每次判断奇偶性，奇数多乘一次。
    //有边界值2147483648不能用位变换进行i的操作
    let ans = 1.0, i = Math.abs(n);
    while (i > 0) {
        if (i % 2 === 1) {
            ans *= x
        }
        x *= x;
        i = Math.floor(i / 2);
    }
    return n < 0 ? (1 / ans) : ans;
};
console.log(myPow(2.00000, -2147483648))