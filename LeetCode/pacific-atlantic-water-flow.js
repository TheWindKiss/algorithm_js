/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
var pacificAtlantic = function (heights) {
    const n = heights.length, m = heights[0].length;
    const AO = new Array(n).fill(false).map(() => new Array(m).fill(false));
    const PO = new Array(n).fill(false).map(() => new Array(m).fill(false));
    const ans = [];
    const dfs = (x, y, ocean) => {
        if (ocean[x][y]) return;
        ocean[x][y] = true;
        for (let [dx, dy] of dirs) {
            let newX = dx + x, newY = dy + y;
            if (newX < n && newY < m && newX >= 0 && newY >= 0 && heights[newX][newY] >= heights[x][y]) {
                dfs(newX, newY, ocean);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        dfs(i, 0, PO);
        dfs(i, m - 1, AO);
    }
    for (let j = 0; j < m; j++) {
        dfs(0, j, PO);
        dfs(n - 1, j, AO);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (AO[i][j] && PO[i][j]) {
                ans.push([i, j]);
            }
        }
    }
    return ans;

};
console.log(pacificAtlantic([[3, 3, 3, 3, 3, 3], [3, 0, 3, 3, 0, 3], [3, 3, 3, 3, 3, 3]]))
