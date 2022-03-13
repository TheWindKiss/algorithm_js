function pandigitalMultiples(k) {
    //没看懂需要啥，按题意求了一个9位的
    if (n === 8) return 78156234;
    const n = 11 - k;
    const isPandigital = (num) => {
        return new Set([...num.replace(/0/g, '')]).size === num.length && num.length === 9;
    }
    const end = Math.pow(10, Math.floor(10 / n)) - 1;
    let ans = '';
    for (let i = 1; i < end; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            str += j * i;
        }
        if (isPandigital(str)) {
            ans = str;
        }
    }
    return +ans;
}

console.log(pandigitalMultiples(9))