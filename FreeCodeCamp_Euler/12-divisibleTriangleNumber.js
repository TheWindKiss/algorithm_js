function divisibleTriangleNumber(n) {
    let sum = 1;
    let index = 2;
    while (check(sum) < n) {
        sum += index;
        index++;
    }
    return sum;
}
const check = (num) => {
    let sqrtNum = Math.sqrt(num);
    let count = 0;
    for (let i = 1; i < sqrtNum; i++) {
        if (num % i === 0) count += 2;
    }
    if (sqrtNum == Math.floor(sqrtNum)) count++;
    return count;
}
console.log(divisibleTriangleNumber(500))