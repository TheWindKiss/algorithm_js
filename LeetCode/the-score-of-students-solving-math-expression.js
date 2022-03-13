/**
 * @param {string} s
 * @param {number[]} answers
 * @return {number}
 */
var scoreOfStudents = function (s, answers) {
    const n = s.length;
    const answerTrue = eval(s);
    const dp = new Array(n).fill(0).map(i => new Array(n).fill(0));
    for (let i = 0; i < n; i += 2) {
        dp[i][i] = [Number(s[i])];
    }
    for (let L = 2; L < n; L += 2) {
        for (let i = 0; i <= n - L; i += 2) {
            const end = i + L;
            const values = [];
            for (let j = i + 1; j < end; j += 2) {
                const left = dp[i][j - 1];
                const right = dp[j + 1][end];
                console.log(`left:${left}-------right:${right}`)
                for (const left1 of left) {
                    for (const right1 of right) {
                        // console.log(`left1:${left1}-------right1:${right1}`)
                        const calc = s[j] === '+' ? left1 + right1 : left1 * right1;
                        if (calc <= 1000) {
                            values.push(calc);
                        }
                    }
                }
            }
            dp[i][end] = [...new Set(values)];
        }
    }
    let ans = 0;
    console.log(dp[0][n - 1])
    for (const answer of answers) {
        if (answer == answerTrue) {
            ans += 5;
        } else {
            if (dp[0][n - 1].includes(answer)) {
                ans += 2;
            }
        }
    }
    return ans;
};

console.log(scoreOfStudents("1+4+4+1*0+2",
    [7, 717, 2, 11, 11, 236, 7, 15, 7, 11, 11, 561, 7, 164, 19, 11, 11, 15, 11, 15, 11, 826, 7, 733, 19, 2, 831, 2, 11, 2, 665, 3, 11, 3, 2, 11, 52, 19, 7, 559, 2, 19, 7, 15, 664, 3, 113, 11, 454]))