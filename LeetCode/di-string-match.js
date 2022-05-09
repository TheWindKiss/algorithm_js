/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    //思路：将左右端点分别赋值为0，n，遍历s当字符为D时放右端点并减1，为I时放左端点并加1。
    const n = s.length, ans = new Array(n + 1);
    let l = 0, r = n;
    for (let i = 0; i <= n; i++) {
        if (s[i] === 'D') {
            ans[i] = r--;
        } else {
            ans[i] = l++;
        }
    }
    return ans;
};
console.log(diStringMatch("IDIDI"))