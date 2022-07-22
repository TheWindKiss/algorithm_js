/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function (intervals) {
    const n = intervals.length;
    intervals.sort((a, b) => {
        if (a[0] == b[0]) return b[1] - a[1];
        return a[0] - b[0]
    })
    let cur = intervals[n - 1][0], next = intervals[n - 1][0] + 1, ans = 2;
    for (let i = n - 2; i >= 0; i--) {
        if (intervals[i][1] >= next) continue;
        else if (intervals[i][1] < cur) {
            cur = intervals[i][0];
            next = intervals[i][0] + 1;
            ans += 2;
        } else {
            next = cur;
            cur = intervals[i][0];
            ans++;
        }
    }
    return ans;
};
console.log(intersectionSizeTwo([[1, 3], [1, 4], [2, 5], [3, 5]]))