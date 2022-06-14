/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    //直接模拟，注意i,j的每轮开始时跟对应对角线的关系，计算初始i,j
    const n = mat.length, m = mat[0].length, upper = m + n - 1;
    const ans = new Array(n * m);
    let idx = 0;
    for (let k = 0; k < upper; k++) {
        if (k & 1 == 1) {
            let i = k < m ? 0 : k - m + 1, j = k < m ? k : m - 1;
            while (i < n && j >= 0) {
                ans[idx] = mat[i][j];
                i++;
                j--;
                idx++;
            }

        } else {
            let i = k < n ? k : n - 1, j = k < n ? 0 : k - n + 1;
            while (i >= 0 && j < m) {
                ans[idx] = mat[i][j];
                i--;
                j++;
                idx++;
            }
        }
    }
    return ans;

};
console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))