function primeSummation(n) {
    let ans = 0;
    for (let i = 2; i < n; i++) {
        if (check(i)) {
            ans += i;
        }
    }
    return ans;
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
console.log(primeSummation(2000000)) 