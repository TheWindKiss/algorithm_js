/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let x = Math.floor(Math.sqrt(2 * n)) - 1;
    let sum = x * (x + 1) / 2;
    if (sum + x + 1 <= n) {
        return x + 1;
    }
    return x;
};
console.log(arrangeCoins(10))