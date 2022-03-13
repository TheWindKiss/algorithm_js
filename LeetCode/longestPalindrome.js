/**
 * @param {string} s
 * @return {string}
 */
//动态规划，找回文
var longestPalindrome = function (s) {
    const len = s.length
    if (len < 2) {
        return s
    }

    let maxLen = 1;
    let begin = 0;
    let dp = Array(len).fill(0).map(x => Array(len).fill(0))
    for (let i = 0; i < len; i++) {
        dp[i][i] = 1;
        maxLen = 1;
    }
    for (let L = 2; L <= len; L++) {
        for (let i = 0; i < len; i++) {
            let j = i + L - 1;
            if (j >= len) {
                break;
            }
            if (s[i] !== s[j]) {
                dp[i][j] = 0;
            } else {
                if (j - i < 3) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
};


console.log(longestPalindrome("babad"))