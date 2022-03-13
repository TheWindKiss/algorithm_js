/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    }
    let ans = 1;
    let a = 0;
    let b = 0;
    for (let i = 1; i <= n; i++) {
        //跳上n-2阶有b中方法
        a = b;
        //跳上n-1阶有ans中方法
        b = ans;
        //跳上n阶有ans+b中方法
        ans = a + b;
    }
    return ans
};
console.log(climbStairs(3))