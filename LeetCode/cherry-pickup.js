/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
    const n = grid.length, dp = new Array(2 * n - 1).fill(0).map(() => new Array(n).fill(0).map((() => new Array(n).fill(-Infinity))));
    dp[0][0][0] = grid[0][0];
    for (let k = 1; k < n * 2 - 1; k++) {
        for (let x1 = Math.max(k - n + 1, 0); x1 <= Math.min(k, n - 1); x1++) {
            const y1 = k - x1;
            if (grid[x1][y1] == -1) continue;
            for (let x2 = x1; x2 <= Math.min(k, n - 1); x2++) {
                let y2 = k - x2;
                if (grid[x2][y2] == -1) continue;
                let res = dp[k - 1][x1][x2];
                if (x1 > 0) {
                    res = Math.max(res, dp[k - 1][x1 - 1][x2]);
                }
                if (x2 > 0) {
                    res = Math.max(res, dp[k - 1][x1][x2 - 1]);
                }
                if (x1 > 0 && x2 > 0) {
                    res = Math.max(res, dp[k - 1][x1 - 1][x2 - 1]);
                }
                res += grid[x1][y1];
                if (x2 != x1) {
                    res += grid[x2][y2];
                }
                dp[k][x1][x2] = res;
            }
        }
    }
    return Math.max(dp[n * 2 - 2][n - 1][n - 1], 0);
};
console.log(cherryPickup([[0, 1, -1],
[1, 0, -1],
[1, 1, 1]]))