/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let n = matrix.length;
    let m=matrix[0].length;
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
    let maxSize = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === "0") {
                continue;
            } else {
                if (i > 0 && j > 0) {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                } else {
                    dp[i][j] = 1;
                }
                maxSize = Math.max(dp[i][j], maxSize);
            }
        }
    }
    return maxSize * maxSize
};

console.log(maximalSquare(
    [["1","1"],["1","1"]]
))