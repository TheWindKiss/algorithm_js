/**
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function (increase, requirements) {
    const day = new Array(increase.length + 1).fill(0).map(() => new Array(3).fill(0));
    for (let i = 1; i < day.length; i++) {
        day[i][0] = day[i - 1][0] + increase[i - 1][0];
        day[i][1] = day[i - 1][1] + increase[i - 1][1];
        day[i][2] = day[i - 1][2] + increase[i - 1][2];
    }
    const ans = new Array(requirements.length).fill(-1);
    console.log(day)
    for (let i = 0; i < requirements.length; i++) {
        let s = 0;
        for (let j = 0; j < 3; j++) {
            let l = s;
            let r = day.length;
            while (l < r) {
                const mid = Math.floor((l + r) / 2);
                console.log(`j:${j}----l:${l}----r:${r}----mid:${mid}`)
                if (day[mid][j] >= requirements[i][j]) {
                    r = mid;
                } else {
                    l = mid+1 ;
                }
            }
            s = l;
        }
        ans[i] = s!==day.length?s:ans[i];
    }
    return ans;
};

console.log(getTriggerTime(increase = [[2, 8, 4], [2, 5, 0], [10, 9, 8]], requirements = [[2, 11, 3], [15, 10, 7], [9, 17, 12], [8, 1, 14]]))