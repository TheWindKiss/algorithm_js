function nthPrime(n) {
    if (n == 1) return 2;
    if (n == 2) return 3;
    //从n==3开始可以进行步长为2的循环，优化次数
    n = n - 2;
    let i = 3;
    while (n > 0) {
        i += 2;
        if (check(i)) {
            n--;
        }

    }
    return i;
}
const check = (num) => {
    let sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(nthPrime(3))