const primes = new Set();//使用set优化查找速度
function circularPrimes(n) {
    const ans = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            primes.add(i);
        }
    }
    for (let prime of primes) {
        if (isCircle(prime)) {
            ans.push(prime);
        }
    }
    return ans.length;
}
const isPrime = (num) => {
    let sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
const isCircle = (num) => {
    let arr = (num + '').split('');
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let first = arr[0];
        arr = arr.splice(1);
        arr.push(first);
        const num = Number(arr.join(''))
        if (!primes.has(num)) {
            if (!isPrime(num)) {
                return false;
            }
        }
    }
    return true;
}
console.log(circularPrimes(750000))