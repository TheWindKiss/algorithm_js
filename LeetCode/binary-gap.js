/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    const bin = n.toString(2);
    const len = bin.length;
    let pre = 0, cur = 0, ans = 0;
    for (let i = 0; i < len; i++) {
        if (bin[i] === '1') {
            cur = pre;
            pre = i;
            ans = Math.max(ans, pre - cur);
        }
    }
    return ans;
};
console.log(binaryGap(125))