function champernownesConstant(n) {
    let ans = 1;
    for (let i = 1; i <= n; i *= 10) {
        ans *= getDigit(i);
    }
    return ans;
}
const getDigit = (n) => {
    //通过数学计算来定位所求的位的值
    let low = 0, upper = 0, turns = 0;
    while (upper < n) {
        low = upper;
        upper += 9 * 10 ** turns * ++turns;
    }
    //已经查看过的数据块
    let intoBlock = n - low - 1;
    //目标所在的数据项
    const num = 10 ** (turns - 1) + intoBlock / turns;
    return num.toString()[intoBlock % turns];
}

console.log(champernownesConstant(1000000))