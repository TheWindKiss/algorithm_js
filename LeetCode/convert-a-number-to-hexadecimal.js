/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num == 0) {
        return '0';
    }
    const arr = [];
    for (let i = 7; i >= 0; i--) {
        //转换为对应的十六进制
        const val = (num >>( 4 * i)) & 0xf;
        if (arr.length > 0 || val > 0) {
            //对于每个位数进行转换
            const digit = val < 10 ? String.fromCharCode('0'.charCodeAt() + val) : String.fromCharCode('a'.charCodeAt() + val - 10);
            arr.push(digit);
        }
    }
    return arr.join('');
};

console.log(toHex(26))