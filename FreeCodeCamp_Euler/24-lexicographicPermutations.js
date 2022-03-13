const DIGITS = [362880, 40320, 5040, 720, 120, 24, 6, 2, 1, 1]//0-9的阶乘
const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];//构成数字的元素
function lexicographicPermutations(n) {
    let newNum = n;
    let ans = '';
    for (let i = 0; i < 10; i++) {
        const digit = DIGITS[i];
        const position = NUMS.splice(Math.floor(newNum / digit), 1);
        ans += position
        newNum = newNum % digit;
    }
    return Number(ans);
}
console.log(lexicographicPermutations(999999))