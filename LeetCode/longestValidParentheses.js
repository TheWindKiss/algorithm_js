/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let len = s.length;
    let j = len - 1;
    while (s[j] !== ')' && j > 0) {
        j--;
    }
    let n = j + 1;
    let max = 0;
    let dp = Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        //有效的字段必须以")"结尾，"("结尾的不用考虑
        if (s[i] === ")") {
            if (s[i - 1] === "(") {
                //字符串形如 ".....()"，说明结束部分位"()"，有效字符串长度加2
                dp[i] = (i > 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == '(') {
                //字符串形如 ".....))"，如果s[i-dp[i-1]-1]=="("，说明后一个")""是更长字符串的一部分。
                //dp[i-1]是前一")"的组成的有效字符串长度
                dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            max = Math.max(max, dp[i])
        }

    }
    return max
};

console.log(longestValidParentheses("()(()"))