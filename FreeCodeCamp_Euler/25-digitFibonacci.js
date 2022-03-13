function digitFibonacci(n) {
    if (n == 1) return 1;
    let index = 2, str = '', f0 = 1, f1 = 1;
    while (str.length < n) {
        let temp = f0;
        f0 = f0 + f1;
        f1 = temp;
        index++;
        str = '' + f0;
    }
    return index;
}

console.log(digitFibonacci(15))