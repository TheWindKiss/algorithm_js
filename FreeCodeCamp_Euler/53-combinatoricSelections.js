function combinatoricSelections(limit) {
    let cnt = 0;
    for (let i = 1; i <= 100; i++) {
        let upper = i % 2 === 0 ? i / 2 : Math.floor(i / 2) ;
        for (let j = upper; j > 0; j--) {
            if (computeNum(i, j) > limit) {
               // console.log(`${i},${j}`)
                if (j * 2 === i) cnt++
                else cnt += 2;
            }else{
                break;
            }

        }
    }
    return cnt;
}
const computeNum = (n, r) => {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    let ans = 1;
    while (n > 0) {
        ans *= n;
        n--;
    }
    return ans;
}
console.log(combinatoricSelections(100000))