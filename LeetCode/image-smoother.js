/**
 * @param {number[][]} img
 * @return {number[][]}
 */
const dirs = [[1, 1], [1, 0], [1, -1], [-1, 1], [-1, 0], [-1, -1], [0, 1], [0, -1]]
var imageSmoother = function (img) {
    const n = img.length, m = img[0].length;
    const ans = new Array(n).fill(0).map(() => new Array(m).fill(0))
    const getAvg = (i, j) => {
        let sum = img[i][j], cnt = 1;
        for (let [x, y] of dirs) {
            if ((i + x) < 0 || (i + x) >= n || (j + y) < 0 || (j + y) >= m) continue;
            sum += img[i + x][j + y];
            cnt++;
        }
        console.log(sum)
        return Math.floor(sum / cnt);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            ans[i][j] = getAvg(i, j);
        }
    }
    return ans;
};
console.log(imageSmoother([[100, 200, 100], [200, 50, 200], [100, 200, 100]]))