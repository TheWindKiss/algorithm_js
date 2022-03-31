/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let ans = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber2(i)) ans.push(i)
    }
    return ans;
};
const isSelfDividingNumber = (num) => {
    //直接分割字符串的形式
    const arr = (num + '').split('');
    for (const n of arr) {
        if (n === '0') return false;
        if ((num % (parseInt(n)) !== 0)) {
            return false;
        }
    }
    return true;
}
const isSelfDividingNumber2 = (num) => {
    //整除10求每位数
    let copy=num;
    while (num > 0) {
        let n = num % 10;
        if (copy % n !== 0) return false;
        num = Math.floor(num / 10);
    }
    return true;
}

console.log(selfDividingNumbers(1, 22))