function smallestMult(n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = getMCM(ans, i)
    }
    return ans;
}
const gcd = (a, b) => {
    //欧几里得算法，计算最大公约数
    if (b === 0) return a;
    return gcd(b, a % b)
}
const getMCM = (num1, num2) => {
    //获取两个数的最小公倍数
    return num1 * num2 / gcd(num1, num2);
}
console.log(smallestMult(20))