function sumSquareDifference(n) {
    let sum = 0, squareSum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        squareSum += i * i;
    }
    return sum * sum - squareSum;
}

console.log(sumSquareDifference(100))