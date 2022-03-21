const PRIMES = new Set([2, 3]);
(function (num) {
    const isPrime = (num) => {
        let sqrtNum = Math.sqrt(num);
        for (let i = 2; i <= sqrtNum; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    for (let i = 5; i < num; i++) {
        if (isPrime(i)) PRIMES.add(i)
    }
})(1000000)
function primeDigitReplacements(n) {
    const elements = Array.from(PRIMES);
    for (let ele of elements) {
        if (isNValueFamily(ele, n)) return ele;
    }

    return -1;
}
const isNValueFamily = (num, n) => {
    const prime = num + '';
    const lastDigit = prime[prime.length - 1];
    return (replaceFamily(prime, '0', n) || (lastDigit != '1' && replaceFamily(prime, '1', n)) || replaceFamily(prime, '2', n))
}
const replaceFamily = (prime, digitReplace, n) => {
    let cnt = 0;
    const digits = '0123456789';
    for (const digit of digits) {
        const re = new RegExp(digitReplace, 'g');
        const next = parseInt(prime.replace(re, digit), 10);
        if (isPartOfFamily(next, prime)) cnt++;
    }
    return cnt === n;
}
const isPartOfFamily = (num, prime) => {
    return (PRIMES.has(num) && num.toString().length === prime.length)
}
console.log(primeDigitReplacements(8))