/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    //动态规划
    let ans = Array(m).fill(0).map(x => { return Array(n).fill(0) })
    for (let i = 0; i < m; i++) {
        ans[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        ans[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            ans[i][j] = ans[i - 1][j] + ans[i][j - 1]
        }
    }
    return ans[m - 1][n - 1]

    /*    //纯数学计算，排列组合
       let ans=1;
       for(i=n,j=1;j<m;i++,j++){
           ans=Math.floor(ans*i/j)
       }
       return ans */
}

console.log(uniquePaths(3, 7))
