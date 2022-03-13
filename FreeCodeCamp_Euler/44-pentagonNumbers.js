function pentagonNumbers() {
    let ans = Number.MAX_VALUE;
    //这个range是从100开始加零试出来的，可以缩短
    for (let i = 1; i < 10000; i++) {
        const num1 = i * (i * 3 - 1) / 2;
        for (let j = 1; j < i; j++) {
            const num2 = j * (j * 3 - 1) / 2;
            let sum = num1 + num2;
            let d = num1 - num2;
            if (isPentagon(sum) && isPentagon(d)) {
                if (d < ans) ans = d;
            }
        }
    }
    return ans;
}
const isPentagon = (num) => {
    let n = (Math.sqrt(24 * num + 1) + 1) / 6;
    return n === Math.floor(n);
}
console.log(pentagonNumbers())