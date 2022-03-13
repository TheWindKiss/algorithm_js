function spiralDiagonals(n) {
    //这种题目一般都是数学归纳出等式来计算。
    let sum = 1, size = 1;
    while (n > size) {
        size += 2;
        sum += 4 * size * size - 6 * size + 6;
        // console.log(4*size*size-6*size+6)
    }
    return sum;
}

console.log(spiralDiagonals(1001))