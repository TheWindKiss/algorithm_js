/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    //思路，构造的正方形的边长是已知的，为总长度的四分之一，所以可以先剪枝。将所有数组长度不满4以及总和不能被四整除的都剪掉
    //然后就是构造四个桶来装火柴，用深度遍历的方式找到能够刚好装满桶的情况，如果有则返回true否则false。
    let sum = matchsticks.reduce((pre, cur) => pre + cur, 0);
    if (sum % 4 !== 0) return false;
    let avg = sum / 4;
    const n = matchsticks.length;
    const allocate = (idx, buckets) => {
        if (idx === n) {
            return buckets[0] === avg && buckets[1] === avg && buckets[2] === avg;
        }
        for (let i = 0; i < 4; i++) {
            if (buckets[i] + matchsticks[idx] > avg) continue;
            buckets[i] += matchsticks[idx];
            if (allocate(idx + 1, buckets)) return true;
            buckets[i] -= matchsticks[idx];
        }
        return false;
    }
    matchsticks.sort((a, b) => b - a);
    if (makesquare[0] > avg) return false;
    return allocate(0, [0, 0, 0, 0]);
};
console.log(makesquare([1, 1, 2, 2, 2]))