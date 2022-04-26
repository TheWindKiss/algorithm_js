/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let x = 0, y = 0, z = 0;
    const n = grid.length;
    for (let i = 0; i < n; i++) {
        let a = 0, b = 0;
        for (let j = 0; j < n; j++) {
            x += grid[i][j] == 0 ? 0 : 1;
            a = Math.max(a, grid[i][j]);
            b = Math.max(b, grid[j][i]);
        }
        y += a;
        z += b;
    }
    return x + y + z;
};
console.log(projectionArea([[1, 2], [3, 4]]))