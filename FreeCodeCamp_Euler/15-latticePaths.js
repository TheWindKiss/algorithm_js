function latticePaths(gridSize) {
    //一个简单的动态规划思想，不要用递归会内存溢出
    const dp = new Array(gridSize + 1).fill(1).map(() => new Array(gridSize + 1).fill(1));
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[gridSize][gridSize];
}
console.log(latticePaths(20))