/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
    const r = n * 2, upper = Math.floor(Math.sqrt(r)) ;
    let ans = 0;
    for (let i = 1; i <= upper; i++) {
        if (r % i == 0 && (Math.floor(r / i - i + 1) & 1) == 0) {
            ans++;
        }
    }
    return ans;

};
console.log(consecutiveNumbersSum(15))