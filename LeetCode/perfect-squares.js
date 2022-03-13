/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const isPerfectSquare = (x) => {
        const a = Math.floor(Math.sqrt(x));
        return a * a == x;
    }
    const checkAnswer4 = (x) => {
        while (x % 4 == 0) {
            x /= 4;
        }
        return x % 8 == 7;
    }
    if (isPerfectSquare(n)) {
        return 1;
    }
    if (checkAnswer4(n)) {
        return 4;
    }
    for (let i = 1; i * i < n; i++) {
        const other = n - i * i;
        if (isPerfectSquare(other)) {
            return 2;
        }
    }

    return 3
};