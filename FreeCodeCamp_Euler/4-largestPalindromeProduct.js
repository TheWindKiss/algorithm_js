
function largestPalindromeProduct(n) {
    if (n == 1) return 9;
    let maxNum = Math.pow(10, n) - 1;
    let minNum = Math.pow(10, n - 1);
    const arr = [];
    for (let i = maxNum; i >= minNum; i--) {
        for (let j = i; j >= minNum; j--) {
            let num = i * j;
            if (check(num)) {
                arr.push(num)
            }
        }
    }
    return Math.max(...arr);
}
const check = (num) => {
    let str = '' + num;
    let l = 0, r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

console.log(largestPalindromeProduct(4))