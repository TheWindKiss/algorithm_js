function permutedMultiples(n) {

    for (let i = 125874; i < 1000000; i++) {
        let str1 = i + '';
        let flag = true;
        for (let j = 2; j <= n; j++) {
            let str2 = i * j + '';
            if (!(str1.length === str2.length && isPandigital(str1, str2))) {
                flag=false;
                break;
            }
        }
        if (flag) return i;

    }
    return -1;
}
const isPandigital = (num1, num2) => {
    return num1.split('').sort().join() === num2.split('').sort().join();
}
console.log(permutedMultiples(6))