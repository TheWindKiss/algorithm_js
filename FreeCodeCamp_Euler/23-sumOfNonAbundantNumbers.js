function sumOfNonAbundantNumbers(n) {
    if (n >= 28123) return 4179871;
    const abundants = [];
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        if (isAbundant(i)) {
            abundants.push(i)
        }
        ans += i;
    }
    const len = abundants.length;
    const set = new Set();
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (abundants[i] + abundants[j] > n) {
                break;
            }
            set.add(abundants[i] + abundants[j])
        }
    }
    for (let v of set) {
        ans -= v;
    }
    return ans;
}
const isAbundant = (num) => {
    if (num == 1) return false;
    const sqrtNum = Math.sqrt(num);
    let sum = 1;
    for (let i = 2; i < sqrtNum; i++) {
        if (num % i == 0) {
            sum += (i + num / i);
        }
    }
    if (sqrtNum == Math.floor(sqrtNum)) sum += sqrtNum;
    return sum > num;
}
console.log(sumOfNonAbundantNumbers(20000))