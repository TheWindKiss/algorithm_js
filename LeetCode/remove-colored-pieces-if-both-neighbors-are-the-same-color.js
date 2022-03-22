/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
    const n = colors.length;
    let cnt = 1, ans=0;
    for (let i = 0; i < n; i++) {
        if (colors[i + 1] != colors[i]) {
            cnt = 1;
        } else {
            cnt += 1;
            if (cnt >= 3) {
                ans += (colors[i] === 'A' ? 1 : -1);
            }
        }
    }
    return ans>0;
};
console.log(winnerOfGame('ABBBBBBBAAA'))