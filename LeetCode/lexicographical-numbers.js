/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    //k-th-smallest-in-lexicographical-order题目的前置问题
    //通过dfs查找适合的数字。
    //1. current*10<=n,符合题意加入数组
    //2. current*10>n时, 判断是否已经到底（cur%10==9||cur+1>n）
    //有就去下一个字典整数， 没有则current++;
    let ans = [], cur = 1;
    for (let i = 0; i < n; i++) {
        ans.push(cur);
        if (cur * 10 <= n) {
            cur *= 10;
        } else {
            while (cur % 10 == 9 || cur + 1 > n) {
                cur = Math.floor(cur / 10);
            }
            cur++;
        }
    }
    return ans;
}
