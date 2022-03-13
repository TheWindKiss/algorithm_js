/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend == -2147483648 && divisor == -1) return 2147483647
    if (dividend == Number.MIN_VALUE && divisor == -1) return Number.MAX_VALUE;
    if (dividend == 0) return 0;
    if (divisor == 1) return dividend;
    if (divisor == -1) return -dividend;
    const div = (a, b) => {
        if (a < b) return 0;
        let times = 1;
        let tb = b;
        while ((tb + tb) <= a) {
            times += times;
            tb += tb
        }
        return times + div(a - tb, b);
    }
    let flag = 1;
    if ((dividend > 0 && divisor < 0 || (dividend < 0 && divisor > 0))) {
        flag = -1;
    }
    dividend = dividend > 0 ? dividend : -dividend;
    divisor = divisor > 0 ? divisor : -divisor;
    let res = div(dividend, divisor);
    return flag > 0 ? res : -res;

};

console.log(divide(-109, 3))

