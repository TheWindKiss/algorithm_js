/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        let total = 0;
        let mid =Math.floor(i/2)
        for (let j = 1; j <= mid; j++) {
            total += dp[j - 1] * dp[i - j]*2
        }
        if(i%2==1){
            total+=dp[mid]*dp[i-mid-1]
        }
        dp[i] = total
    }
    return dp[n]
};
console.log(numTrees(5))