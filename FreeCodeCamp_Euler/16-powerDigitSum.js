function powerDigitSum(exponent) {
    let nums = BigInt(2 ** exponent) + '';
    let ans = 0;
    for (let num of nums) {
        ans += Number(num);
    }
    return ans;
}

console.log(powerDigitSum(15))