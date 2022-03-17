function selfPowers(power, lastDigits) {
    const mod = 10 ** lastDigits;
    let ans = 0;
    for (let i = 1; i <= power; i++) {
        ans = (ans + getLastDigitsOfNum(i, mod)) % mod;
    }
    return ans;
}
const getLastDigitsOfNum = (num, mod) => {
    let last = 1;
    for (let i = 0; i < num; i++) {
        last = (last * num) % mod;
    }
    return last;
}
console.log(selfPowers(1000, 10))