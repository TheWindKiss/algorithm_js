/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    /*     const max = Math.pow(2, k)-1;
        const len = ((max ).toString(2) + "").length;
        for (let i = 0; i <= max; i++) {
            let num = "" + i.toString(2);
            if (num.length != len) {
                for (let j = 0; j < (len - num.length); j++) {
                    num = "0" + num;
                }
            }
            const re = new RegExp(num);
            if (!re.test(s)) {
                return false;
            }
        }
        return true */
    if (s.length < (1 << k) + k - 1) {
        return false;
    }
    let set = new Set();
    for (let i = 0; i + k <= s.length; i++) {
        set.add(s.substring(i, i + k));
    }
    return set.size == (1 << k);

};
console.log(hasAllCodes("00110110",
    2))