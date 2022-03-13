/**
 * 
 * @param {Number} num 
 * @param {Array} str 
 * @returns {Array}
 */
const getNumStr = (num, str) => {
    if (num === 0) return str;
    if (num === 1e9) { str.push('one'+BILLION); return str }
    if (num === 1e6) { str.push('one'+MILLION); return str }
    if (num === 1000) { str.push('one'+THOUSAND); return str }
    if (num === 100) { str.push('one'+HUNDRED); return str }
    if (num > 1e9) {
        let newStr = [];
        let suffix = BILLION;
        getNumStr(Math.floor(num / 1e9), newStr)
        num = num % 1e9;
        str.push(newStr.join('') + suffix);
        getNumStr(num, str);
    } else if (num > 1e6) {
        let newStr = [];
        let suffix = MILLION;
        getNumStr(Math.floor(num / 1e6), newStr)
        num = num % 1e6;
        str.push(newStr.join('') + suffix);
        getNumStr(num, str);
    } else if (num > 1000) {
        let newStr = [];
        let suffix = THOUSAND;
        getNumStr(Math.floor(num / 1000), newStr)
        num = num % 1000;
        str.push(newStr.join('') + suffix);

        getNumStr(num, str);
    } else if (num > 100) {
        let newStr = [];
        let suffix = HUNDRED;
        getNumStr(Math.floor(num / 100), newStr)
        num = num % 100;
        if (num !== 0) suffix += 'and'
        str.push(newStr.join('') + suffix);

        getNumStr(num, str);
    } else if (num >= 20) {
        str.push(DOUBLE[Math.floor(num / 10)] + UNGER20[num % 10]);
        return str;
    } else {
        str.push(UNGER20[num]);
        return str;
    }

}