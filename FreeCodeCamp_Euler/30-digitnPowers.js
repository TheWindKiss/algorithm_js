function digitnPowers(n) {
    //数据量大的时候，用BigInt而不是Number
    if (n == 2) return 0;
    const POWER = Array(10).fill(0).map((_, index) => index ** n);//将1-9的n次指数保存起来减少运算量
    const check = (num, n) => {
        let str = '' + num;
        let sumOfDigit = 0;
        for (let ch of str) {
            sumOfDigit += POWER[Number(ch)];
        }
        return sumOfDigit === num;
    }
    let sum = 0;
    let end = 9 ** (n + 1);
    for (let i = 2 ** n; i <= end; i++) {
        if (check(i, n)) {
            sum += i;
        }
    }
    return sum;
}
console.log(digitnPowers(5))