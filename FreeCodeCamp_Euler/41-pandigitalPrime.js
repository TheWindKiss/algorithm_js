function pandigitalPrime(n) {
    let start = Number(new Array(n).fill(0).map((_, index) => {
        return n - index;
    }).join(''));
    const ans = []
    for (let i = start; i > 1; i -= 2) {
        if (isPrime(i) && isPandigital(i)) {
            return i;
        }
    }
    return ans;
}

const isPrime = (num) => {
    let sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i == 0) return false;
    }
    return true;
}
const isPandigital = (num) => {
    const str = num + '';
    const n = str.length;
    for (let i = 1; i <= n; i++) {
        if (str.indexOf(i + '') === -1) return false;
    }
    return true;

}
console.log(pandigitalPrime(4))