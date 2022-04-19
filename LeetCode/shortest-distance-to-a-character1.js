/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    //通过双指针找到两个相邻的c，循环中间的索引填充最近c的距离
    const n = s.length;
    const ans = new Array(n).fill(0);
    let l = -Number.MAX_VALUE, r = 0;
    while (r < n) {
        if (s[r] === c) {
            //头一端需要额外判断
            let i = l === -Number.MAX_VALUE ? 0 : l;
            while (i <= r) {
                ans[i] = Math.min(i - l, r - i);
                i++;
            }
            l = r;
        }
        r++;
    }
    //尾一端需要额外判断
    let i = l === -Number.MAX_VALUE ? 0 : l;
    while (i < r) {
        ans[i] = Math.min(i - l);
        i++;
    }
    return ans
};

console.log(shortestToChar('abaa', 'b'))
