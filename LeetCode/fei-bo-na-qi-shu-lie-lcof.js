/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const MOD =1000000007;
    if (n<2) {
    return n;
    }
    let i = 2;
    let sum = 0;
    let f1 = 1;
    let f0 = 0;
    while (i <= n) {
        sum =( f1 + f0)%MOD;
        f0 = f1;
        f1 = sum;
        i++
    }
    return sum
};

console.log(fib(1))