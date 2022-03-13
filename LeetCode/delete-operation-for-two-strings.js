/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const longestCommon = (word1, word2) => {
        const n = word1.length, m = word2.length;
        
        const dp = new Array(n + 1).fill(0).map(x => new Array(m + 1).fill(0))
        for (let i = 1; i <= n; i++) {
            const c1 = word1[i - 1];
            for (let j = 1; j <= m; j++) {
                const c2 = word2[j - 1];
                if (c1 === c2) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[n][m]
    }
    const len = longestCommon(word1, word2);
    return word1.length + word2.length - len * 2;
};

console.log(minDistance("a"
    , "ab"))