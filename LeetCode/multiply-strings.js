/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    //按位计算再相加，应该能优化
    if (num1 == '0' || num2 == '0') return '0'
    const arr = [], n = num1.length, m = num2.length, len = n + m;
    for (let i = 0; i < n; i++) {
        let num = num1[i], flag = 0, str = '', re = '0'.repeat(i);
        console.log(str)
        for (let j = m - 1; j >= 0; j--) {
            let a = num * num2[j] + flag;
            str += a % 10;
            flag = Math.floor(a / 10);
        }
        arr.push((str + flag + re).padStart(len, '0'))
    }
    console.log(arr)
    let nums = [], dig = 0;
    for (let i = 0; i < len; i++) {
        let sum = dig;
        for (let j = 0; j < n; j++) {
            sum = +arr[j][i] + sum;
        }
        nums.push(sum % 10);
        dig = Math.floor(sum / 10);
        console.log(dig)
    }
    let str = nums.reverse().join('');
    for (let i = 0; i < len; i++) {
        if (str[i] === '0') continue;
        return str.slice(i);
    }

};
console.log(multiply("23108814760092",
    "55183904456427981"))