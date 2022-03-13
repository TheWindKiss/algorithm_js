function sumFactorialDigits(n) {
    let factorial = BigInt(1);
    while (n > 0) {
        factorial *= BigInt(n);
        n--;
    }
    let ans = 0;
    (factorial + '').split('').forEach((num) => {
        ans += Number(num);
    })
    return ans;
}

console.log(sumFactorialDigits(100)) 