/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    if(ops.length===0){
        return m*n;
    }
    const M = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let ans=0;
    const max=ops.length;
    for (const op of ops) {
        const [x, y] = op;
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                M[i][j] += 1;
                if(M[i][j]==max){
                    ans++;
                }
            }
        }
    }
    return ans;
};

console.log(maxCount(m = 3, n = 3,
    operations = [[2, 2], [3, 3]]))