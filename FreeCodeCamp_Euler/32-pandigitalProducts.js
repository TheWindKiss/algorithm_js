function pandigitalProducts(n) {
    const end = 10 ** (Math.floor(n / 2));//限制遍历次数，通过数学能看出必然两乘积不会大于end
    const pandigitals = [];
    let ans = 0;
    for (let i = 2; i < end; i++) {
        for (let j = 2; j < end; j++) {
            let product = i * j;
            const concatStr = concatNums(i, j, product);
            if (concatStr.length > n) {
                break;
            } else if (concatStr.length < n) {
                continue;
            } else {
                if (isPandigital(n, concatStr) && !pandigitals.includes(product)) {
                    ans += product;
                    pandigitals.push(product);
                }
            }

        }
    }
    return ans;
}

const isPandigital = (n, num) => {
    //判断是否为pandigital
    const str = num + '';
    if (str.length !== n) return false;
    for (let i = 1; i <= n; i++) {
        if (str.indexOf(i + '') === -1) return false;
    }
    return true;
}
const concatNums = (...nums) => {
    //连接数字
    let newNum = '';
    for (let num of nums) {
        newNum += num + '';
    }
    return newNum;
}
console.log(pandigitalProducts(6))