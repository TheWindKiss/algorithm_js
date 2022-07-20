/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    //转一维。
    /*     const n = grid.length, m = grid[0].length, len = n * m;
        if (k >= len) {
            k = k % len;
        }
        const arr = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                arr[i * m + j] = grid[i][j]
            }
        }
        console.log(arr)
        const d = arr.concat(arr).slice(len - k, 2 * len - k);
        const ans = new Array(n).fill(0).map(() => new Array(m).fill(0))
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                ans[i][j] = d[i * m + j]
            }
        }
        return ans; */
    //不用真的转一维，计算出每次在一维时候的坐标就行。
    const n = grid.length, m = grid[0].length, len = n * m, ans = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const idx = (i * m + j + k) % len;
            ans[Math.floor(idx / m)].splice(idx % m, 1, grid[i][j]);
        }
    }
    return ans;
};
console.log(shiftGrid([[1], [2], [3], [4], [7], [6], [5]]
    , 2))