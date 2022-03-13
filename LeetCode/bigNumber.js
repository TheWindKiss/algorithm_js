function bigNumberSum(a, b) {
    let cur = 0;
    while (cur < a.length || cur < b.length) {
        if (!a[cur]) {
            a = "0" + a;
        } else if (!b[cur]) {
            b = "0" + b;
        }
        cur++;
    }
    console.log(a, b)
    let carried = 0;
    let arr = [];

    for (let i = a.length - 1; i > -1; i--) {
        const sum = + b[i]+ Number.parseInt(a[i])+carried ;
        console.log(sum)
        if (sum > 9) {
            carried = 1;
        } else {
            carried = 0;
        }
        arr[i] = sum % 10;

    }
    if (carried > 0) {
        arr.unshift(1)
    }

    return arr.join("")
}

console.log(bigNumberSum("123456789", "9876"));
