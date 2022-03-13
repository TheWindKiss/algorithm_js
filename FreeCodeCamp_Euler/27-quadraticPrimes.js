const cache = new Set();
function quadraticPrimes(range) {
    const minNum = -range;
    let maxCount = 0, ans = 0;
    for (let i = minNum + 1; i < range; i++) {
        for (let j = minNum; j <= range; j++) {
            if (!isPrime(j)) continue;
            let n = 0, f = j, count = 0;
            while (isPrime(f)) {
                n++;
                count++;
                f = n * n + i * n + j;
            }
            if (maxCount < count) {
                ans = i * j;
                maxCount = count;
            }
        }
    }
    return ans;
}

const isPrime = (num) => {
    if (cache.has(num)) return true;
    let sqrtNum = Math.sqrt(Math.abs(num));
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i == 0) return false;
    }
    cache.add(num);
    return true;
}
console.log(quadraticPrimes(1000))