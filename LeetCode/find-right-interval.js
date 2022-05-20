/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    const n = intervals.length;
    const startIntervals = new Array(n).fill(0).map(() => new Array(2).fill(0));
    const endIntervals = new Array(n).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < n; i++) {
        startIntervals[i] = [intervals[i][0], i];
        endIntervals[i] = [intervals[i][1], i];
    }
    startIntervals.sort((a, b) => a[0] - b[0]);
    endIntervals.sort((a, b) => a[0] - b[0]);
    const ans = new Array(n).fill(0);
    let r = 0;
    for (let i = 0; i < n; i++) {
        while (r < n && endIntervals[i][0] > startIntervals[r][0]) r++;
        if (r < n) ans[endIntervals[i][1]] = startIntervals[r][1];
        else ans[endIntervals[i][1]] = -1;
    }
    return ans;
}
console.log(findRightInterval([[3, 4], [2, 3], [1, 2]]))