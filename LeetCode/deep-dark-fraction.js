/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {
    if (cont.length == 1) {
        return [cont[0], 1];
    }
    let denominator = 1;
    let numerator = cont[cont.length - 1];
    for (let i = cont.length - 2; i >= 0; i--) {
        temp = cont[i] * numerator + denominator;
        denominator = numerator;
        numerator = temp;
    }
    return [numerator, denominator]
};

console.log(fraction(cont = [0, 0, 3]))