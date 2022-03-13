const Denomination = [1, 2, 5, 10, 20, 50, 100, 200]
function coinSums(n) {
    //动态规划，第n元等于 (n-合理数量面额)元的数量之和
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let coin of Denomination) {
        for (let i = coin; i <= n; i++) {
            dp[i] += dp[i - coin]
        }
    }
    return dp[n];
}

console.log(coinSums(200))