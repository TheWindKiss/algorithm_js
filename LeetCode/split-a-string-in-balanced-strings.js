/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let d = 0;
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            d++
        } else {
            d--
        }
        if (d === 0) {
            num++
        }
    }
    return num
};

console.log(balancedStringSplit("RLLLLRRRLR"))