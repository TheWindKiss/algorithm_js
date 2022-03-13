function sumAmicableNum(n) {
    let ans = 0
    for (let i = 1; i < n; i++) {
        if (i == (divide(divide(i))) && (i != divide(i))) {
            ans += i;
        }
    }
    return ans;
}
const divide = (num) => {
    let end = Math.sqrt(num);
    let sum = 0;
    for (let i = 1; i < end; i++) {
        if (num % i == 0) {
            sum += i;
            sum += (num / i)
        }
    }
    if (end == Math.floor(end)) {
        sum += end;
    }
    return sum - num;

}
console.log(sumAmicableNum(10000))