/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    /*     问题1：如果 word1[0..i-1] 到 word2[0..j-1] 的变换需要消耗 k 步，那 word1[0..i] 到 word2[0..j] 的变换需要几步呢？
    
    答：先使用 k 步，把 word1[0..i-1] 变换到 word2[0..j-1]，消耗 k 步。再把 word1[i] 改成 word2[j]，就行了。如果 word1[i] == word2[j]，什么也不用做，一共消耗 k 步，否则需要修改，一共消耗 k + 1 步。
    
    问题2：如果 word1[0..i-1] 到 word2[0..j] 的变换需要消耗 k 步，那 word1[0..i] 到 word2[0..j] 的变换需要消耗几步呢？
    
    答：先经过 k 步，把 word1[0..i-1] 变换到 word2[0..j]，消耗掉 k 步，再把 word1[i] 删除，这样，word1[0..i] 就完全变成了 word2[0..j] 了。一共 k + 1 步。
    
    问题3：如果 word1[0..i] 到 word2[0..j-1] 的变换需要消耗 k 步，那 word1[0..i] 到 word2[0..j] 的变换需要消耗几步呢？
    
    答：先经过 k 步，把 word1[0..i] 变换成 word2[0..j-1]，消耗掉 k 步，接下来，再插入一个字符 word2[j], word1[0..i] 就完全变成了 word2[0..j] 了。
    
    从上面三个问题来看，word1[0..i] 变换成 word2[0..j] 主要有三种手段，用哪个消耗少，就用哪个。 */
    let n = word1.length;
    let m = word2.length;
    let ans = Array(n + 1).fill(0).map(a => Array(m + 1).fill(0));
    for (let i = 0; i <= n; i++) {
        ans[i][0] = i;
    }
    for (let j = 0; j <= m; j++) {
        ans[0][j] = j;
    }
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            let left = ans[i - 1][j];
            let down = ans[i][j - 1];
            let leftDown = ans[i - 1][j - 1];
            if (word1[i - 1] == word2[j - 1]) {
                //当word1[i - 1] == word2[j - 1]时，当前字符串修改距离和i-1,j-1相同
                ans[i][j] = leftDown;
            } else {
                //对比找出三种形式中距离最短的那个+1
                ans[i][j] = 1 + Math.min(left, down, leftDown);
            }

        }
    }
    return ans[n][m]
};
console.log(minDistance("intention", "execution"))