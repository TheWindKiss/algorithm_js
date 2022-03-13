const PRIMES = new Set();
function truncatablePrimes(n) {
    let sum = 0, index = 11;
    for (let i = 0; i < n; i++) {
        while (true) {
            if (isPrime(index)) {
                if (istruncatable(index)) {
                    sum += index;
                    index++;
                    break;
                }
            }
            index++;
        }
    }
    return sum;
}

const isPrime = (num) => {
    if (num === 0 || num === 1) return false;
    if (PRIMES.has(num)) return true;
    if (num == 2) return true;
    let sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    PRIMES.add(num);
    return true;
}
const istruncatable = (num) => {
    let strL = num + '';
    let strR = strL.slice();
    let n = strL.length, m = strR.length;
    while (n > 0) {
        strL = strL.slice(0, n);
        let str = strR.slice(m - n, m);
        if (!(isPrime(Number(strL)) && isPrime(Number(str)))) return false;
        n--;
    }
    return true;
}
console.log(truncatablePrimes(8))