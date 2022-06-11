/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    //思路：使用状态转移方程，将每一个位置的反转次数都计算出来找到最少的情况。dp0表示第i个符号为0的变换次数，dp1表示为1的变换次数
    //转移方程：dp0[i]=dp0[i-1]+(s[i-1]==1?1:0),
    //dp1[i]=min(dp1[i-1],dp0[i-1])+(s[i-1]==0?1:0);
    let dp0 = 0, dp1 = 0;
    for (let ch of s) {
        let new0 = dp0, new1 = Math.min(dp0, dp1);
        if (ch === '1') {
            new0++;
        } else {
            new1++;
        }
        dp0 = new0;
        dp1 = new1;
    }
    return Math.min(dp0, dp1);
};