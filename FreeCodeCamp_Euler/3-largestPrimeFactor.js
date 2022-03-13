
function largestPrimeFactor(number) {
    let ans = 0;
    let copy = number
    let sqrtNum = Math.sqrt(number);
    for (let i = 1; i < sqrtNum; i++) {
        if (number % i == 0) {
            ans = i;
            number /= ans;
        }
    }
    return ans == 1 ? copy : ans;
}

console.log(largestPrimeFactor(7))