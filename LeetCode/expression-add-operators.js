/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
    const n = num.length;
    const ans = [];
    let expr = [];
    const backtrack = (expr, i, res, mul) => {
        if (i === n) {
            if (res == target) {
                ans.push(expr.join(''));
            }
            return
        }
        const signIndex = expr.length;
        if (i > 0) {
            expr.push('');//占位
        }
       
        let val = 0;
        for (let j = i; j < n && (j === i || num[i] !== '0'); j++) {
            val = val * 10 + num[j].charCodeAt() - '0'.charCodeAt();
            expr.push(num[j]);
            if (i == 0) {
                backtrack(expr, j + 1, val, val)
            } else {
                expr[signIndex] = '+';
                backtrack(expr, j + 1, res + val, val);
                expr[signIndex] = '-';
                backtrack(expr, j + 1, res - val, -val);
                expr[signIndex] = '*';
                backtrack(expr, j + 1, res - mul + mul * val, mul * val);
            }
        }
       
        expr = expr.splice(signIndex, expr.length - signIndex);
    }
    backtrack(expr, 0, 0, 0);
    return ans;
};

console.log(addOperators("123", 6))