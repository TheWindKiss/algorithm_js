/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let temp = num;
    let c = 0;
    while (temp > 0) {
        temp = temp >> 1;
        c = (c << 1) + 1;
    }
    return num ^ c
};

console.log(findComplement(5))