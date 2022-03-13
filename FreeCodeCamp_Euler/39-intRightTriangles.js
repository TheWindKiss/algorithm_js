function intRightTriangles(n) {
    let maxCount = 0, ans = 0;
    //最小的直角三角形周长位12, 3,4,5
    for (let i = 12; i <= n; i++) {
        if (i % 2 === 1) continue;
        let count = 0;
        for (let a = Math.floor(i / 4); a < i / 2; a++) {
            let b = i * (i - 2 * a) / (2 * i - 2 * a);
            if (a > b && Number.isInteger(b)) {
                count++;
            }
        }
        if (count > maxCount) {
            ans = i;
            maxCount = count;
        }
    }
    return ans;
}

console.log(intRightTriangles(1000))