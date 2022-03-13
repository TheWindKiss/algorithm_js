/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let n = intervals.length;
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })
    let ans = [];
    for (let i = 0; i < n; i++) {
        let left = intervals[i][0];
        let right = intervals[i][1];
        if (ans.length == 0 || ans[ans.length - 1][1] < left) {
            ans.push([left, right])
        } else {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], right)
        }
    }
    return ans
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))