function countLychrelNumbers(num) {
    let ans = 0;
    for (let i = 1; i <= num; i++) {
        let num = i;
        let flag = true, times = 0;
        while (times < 50) {
            let temp = num + reverse(num);
            if (isPalindrome(temp)) {
                flag = false;
                break;
            }
            num=temp;
            times++
        }
        if (flag) ans++;

    }
    return ans;
}
const reverse = (num) => {
    return Number(String(num).split('').reverse().join(''));
}
const isPalindrome = (num) => {
    let reverseNum = reverse(num);
    return num === reverseNum;
}
console.log(countLychrelNumbers(10000))