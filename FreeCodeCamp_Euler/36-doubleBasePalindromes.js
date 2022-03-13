function doubleBasePalindromes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (isPalindrome(i + '')) {
            let binary = (i).toString(2);
            if (isPalindrome(binary)) {
                sum += i;
            }
        }
    }
    return sum;
}

const isPalindrome = (str) => {
    let l = 0, r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
}
console.log(doubleBasePalindromes(1000000))