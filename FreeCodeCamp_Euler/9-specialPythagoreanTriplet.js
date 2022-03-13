function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let max = Math.floor(n / 2);
    for (let i = 1; i < max; i++) {
        for (let j = i; j < max; j++) {
            let temp = Math.sqrt(i * i + j * j);
            if (Math.floor(temp) !== temp) {
                continue;
            } else {
                if (temp + i + j == sumOfabc) {
                    return i * j * temp;
                }
            }
        }
    }
    return -1;
}

console.log(specialPythagoreanTriplet(1000))