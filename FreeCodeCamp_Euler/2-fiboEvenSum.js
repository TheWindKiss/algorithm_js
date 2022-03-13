
const MOD = 1000000007;
function fiboEvenSum(n) {
    if (n < 2) return 0;
    let f = 1, f0 = 0, f1 = 1;
    let ans = 0;
    while (f <= n) {
        f = (f1 + f0) % MOD;
        if (f % 2 === 0) ans += f;
        f0 = f1;
        f1 = f;
    }
    return ans;
}
console.log(fiboEvenSum(100000))