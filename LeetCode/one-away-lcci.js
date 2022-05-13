/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
    //思路：首先字符串的差值大于1直接false,然后思考其实所有的操作其实都是找到第一个差异点，然后比较剩下的字符串是否相等。
    const n = first.length, m = second.length;
    if (Math.abs(n - m) > 1) return false;
    if (n < m) return oneEditAway(second, first);
    let l = 0;
    while (l < m) {
        if (first[l] == second[l]) {
            l++;
        } else {
            if (n == m) {
                return first.slice(l + 1) === second.slice(l + 1);
            } else {
                return first.slice(l + 1) === second.slice(l);
            }
        }
    }
    return true;
};
console.log(oneEditAway('ple', 'plae'))
