/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
    //思路：如果直接寻找两个n位数构成的回文，需要判断回文直接的大小，在n=7开始就会超时
    /*这种思路下，超时  
    if (n == 1) return 9;
     let maxNum = Math.pow(10, n) - 1;
     let minNum = Math.pow(10, n - 1);
     const arr = [];
 
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
     for (let i = maxNum; i >= minNum; i--) {
         for (let j = i; j >= minNum; j--) {
             let num = i * j;
             if (check(num)) {
                 arr.push(num)
             }
         }
     }
     return Math.max(...arr); */
    //转换思路，先构造一个回文，判断是否能够拆成两个n位数。该方法不会超时
    //1.首先构造一个回文，n位数相乘最大能构造一个2n位的数，通过左半边数字构造一个回文
    //2.x从上界开始，从大到小找是否有能被x整除的回文，找到并返回

    if (n == 1) return 9;
    let upper = 10 ** n - 1;
    let bound = Math.pow(10, n - 1);
    for (let i = upper; i >= bound; i--) {
        let j = String(i).split('').reverse().join('');
        let p = BigInt(String(i) + j);
        let x = BigInt(upper);
        while (x * x >= p) {
            if (p % x === 0n) {
                return p % BigInt(1337)
            }
            x--;
        }
    }

};