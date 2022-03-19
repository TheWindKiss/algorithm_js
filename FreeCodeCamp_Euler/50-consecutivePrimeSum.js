const PRIMES = new Set([2, 3]);
const isPrime = (num) => {
    let sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i == 0) return false;
    }
    return true;
}
(function init(num) {
    for (let i = 4; i <= num; i++) {
        if (isPrime(i)) PRIMES.add(i)
    }
})(1000000)
function consecutivePrimeSum(limit) {
    if (limit < 4) return;
    const arr = [...PRIMES], n = PRIMES.size;
    let ans = 0, maxLen = 0;
    for (let i = 0; i < n; i++) {
        let sum = arr[i], len = 0;
        for (let j = i + 1; j < n; j++) {
            sum += arr[j];
            if (sum > limit) break;
            len++;
            if (PRIMES.has(sum) && len >= maxLen) {
                ans = sum;
                maxLen = len;
            }
        }

    }

    return ans;
}
console.log(consecutivePrimeSum(1000000))
