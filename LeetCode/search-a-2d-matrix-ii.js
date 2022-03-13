/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/* var searchMatrix = function (matrix, target) {
    if (matrix == null || matrix.length == 0) return false;
    let m = 0;
    let n = matrix[0].length - 1;
    while (m < matrix.length && n >= 0) {
        if (matrix[m][n] == target) {
            return true;
        } else if (matrix[m][n] > target) {
            n--;
        } else {
            m++;
        }
    }
    return false;
}; */
var searchMatrix = function (matrix, target) {

};
console.log(searchMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]
    , 15))