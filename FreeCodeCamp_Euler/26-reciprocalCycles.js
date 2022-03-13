function reciprocalCycles(n) {
    let maxLen = 1, ans = 3;
    for (let i = 7; i <= n; i++) {
        if (!isPrime(i)) continue;
        let len = getCycleLen(i);
        if (len > maxLen) {
            maxLen = len;
            ans = i;
        }
    }
    return ans;
}
const getCycleLen = (num) => {
    //按位计算位数的方法获取循环位数
    let k = 1, mod = 10 % num;
    while (mod != 1) {
        mod = (mod * 10) % num;
        k++;
    }
    return k;
}
const isPrime = (num) => {
    //如果多次循环可以使用缓存。
    let sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i == 0) return false;
    }
    return true;
}
console.log(reciprocalCycles(800))