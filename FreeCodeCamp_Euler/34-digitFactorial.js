function digitFactorial() {
    let end = 7 * factorial(9);//7个9一定比7*f(9)大，再往上肯定都不符合题意了。这个限制肯定能优化
    var sum = 0;
    var numbers = [];
    for (let i = 3; i < end; i++) {
        if (check(i)) {
            sum += i;
            numbers.push(i);
        }
    }
    return { sum, numbers };
}
const factorial = (n) => {
    if (n == 0 || n === 1) return 1;
    let f = 1;
    while (n > 0) {
        f *= n;
        n--;
    }
    return f;
}
const check = (num) => {
    let arr = (num + '').split('');
    let sum = 0;
    for (let ch of arr) {
        sum += factorial(Number(ch));
    }
    return sum == num;
}

console.log(digitFactorial())