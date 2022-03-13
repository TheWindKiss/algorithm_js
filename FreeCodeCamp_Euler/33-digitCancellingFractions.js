function digitCancellingFractions() {
    //没懂题目是什么意思看了参考，好像是从11-100构造的分数中，找到所有符合取消的分数的乘积的分母（简化后的值）。
    let num1 = 1, num2 = 1;
    for (let i = 11; i < 100; i++) {
        for (let j = 11; j < i; j++) {
            const arr = canclePair(i, j);
            if (!arr) continue;
            if (arr[1] / arr[0] === j / i) {
                num1 *= arr[1];
                num2 *= arr[0];
            }
        }
    }
    return simplifyFrac(num2, num1)[0];
}
const canclePair = (denom, num) => {
    //获取能取消的对应位数
    const dDigits = [Math.floor(denom / 10), denom % 10];
    const nDigits = [Math.floor(num / 10), num % 10];
    if (dDigits.indexOf(0) > -1) {
        //首位不能是零
        return false;
    }
    else if (dDigits[0] === nDigits[0]) {
        return [dDigits[1], nDigits[1]];
    } else if (dDigits[0] === nDigits[1]) {
        return [dDigits[1], nDigits[0]];
    } else if (dDigits[1] === nDigits[0]) {
        return [dDigits[0], nDigits[1]];
    } else if (dDigits[1] === nDigits[1]) {
        return [dDigits[0], nDigits[0]];
    } else {
        return false;
    }
}
function simplifyFrac(denom, num) {
    //将分数简化
    let sDenom = denom, sNum = num;
    for (let i = 2; i < 10; i++) {
        if (sDenom % i === 0 && sNum % i === 0) {
            sDenom /= i;
            sNum /= i;
            i = 2;
        }
    }
    return [sDenom, sNum];
}
console.log(digitCancellingFractions()) 