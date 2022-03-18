const PRIMES = new Set([2, 3]);
const isPrime = (num) => {
    let sqrtNum = Math.sqrt(num);
    for (let i = 2; i < sqrtNum; i++) {
        if (num % i == 0) return false;
    }
    return true;
}
(function initPrimes(num) {
    for (let i = 5; i < num; i++) {
        if (isPrime(i)) PRIMES.add(i)
    }
})(1e4)
function primePermutations() {
    const step_1 = 3330, step_2 = 6660;
    const upperBound = 9999 - step_2;
    for (let i = 1235; i < upperBound; i++) {
        if (i === 1487) continue;
        if (PRIMES.has(i) && PRIMES.has(i + step_1) && PRIMES.has(i + step_2) && isPermutation(i, i + step_1) && isPermutation(i, i + step_2)) {

            return parseInt(`${i}${i + step_1}${i + step_2}`);
        }
    }

}
const isPermutation = (num1, num2) => {
    const arr1 = (num1 + '').split('');
    const arr2 = (num2 + '').split('');
    return arr1.length === arr2.length && arr1.every((digit) => arr2.indexOf(digit) !== -1);
}
console.log(primePermutations())