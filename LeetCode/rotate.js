/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    //先水平翻转，在对角线翻转.图像就顺时针旋转了90度

    let n = matrix.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = matrix[i];
        matrix[i] = matrix[n - i - 1]
        matrix[n - i - 1] = temp;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp
        }
    }

    return matrix
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))