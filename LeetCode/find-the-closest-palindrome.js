/**
 * @param {string} n
 * @return {string}
 */
 var nearestPalindromic = function (n) {
    const len = n.length, bit = BigInt(n)
    //三种边界值
     if (bit < 10n || bit === BigInt(10 ** (len - 1))) return bit - 1n + '' 
     if (bit + 1n === BigInt(10 ** len)) return bit + 2n + ''
     if (bit - 1n === BigInt(10 ** (len - 1))) return bit - 2n + '' 
     const pre = n.slice(0, len + 1 >>> 1) 
     let  ans = ''
     //寻找中间值+1,-1,+0的情况中最小差值的答案
     for (let i = -1; i <= 1; i++) {
       const newPre = (pre | 0) + i + '' 
       const newStr = newPre + (len & 1 ? newPre.slice(0, -1) : newPre).split('').reverse().join('')
       const diff = Math.abs(n - newStr) 
       if (diff && diff < Math.abs(n-ans)) { 
         minDiff = diff
         ans = newStr
       }
     }
     return ans
   
   }

console.log(nearestPalindromic('1283'))