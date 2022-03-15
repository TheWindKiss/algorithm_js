//缓存，记录已经得到的质数
const PRIMES = new Set([2, 3, 5]);

function goldbachsOtherConjecture() {
    let num = 3;
    //如果既不是质数也不满足奇合数，停止循环
    while (isPrime(num) || check(num)) {
        //步长为2，奇数
        num += 2;
    }
    return num;
}
const isPrime = (num) => {
    if (PRIMES.has(num)) return true;
    let end = Math.sqrt(num);
    for (let i = 2; i <= end; i++) {
        if (num % i === 0) return false;
    }
    PRIMES.add(num);
    return true;
}
const check = (num) => {
    let end = Math.sqrt(num / 2);
    for (let i = 1; i <= end; i++) {
        if (isPrime(num - 2 * (i ** 2))) return true;
    }
    return false;
}
console.log(goldbachsOtherConjecture())