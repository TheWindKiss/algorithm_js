/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
let f = new Array(n + 1).fill(0);
for (let i = 2; i < n + 1; i++) {
    f[i] = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
        if (i % j === 0) {
            //fi=f[j]+i/j等价于fi=f[i/j]+j
            f[i] = Math.min(f[i], f[j] + i / j, f[i / j] + j);
        }
    }
}
return f[n]
};
console.log(minSteps(3))