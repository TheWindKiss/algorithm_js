/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    //这道题就是暴力的找到稳赢的步骤，直接找回超时，需要通过进行状态压缩，考虑边界值
    //state用来压缩状态，一开始是零，通过对二进制数的每一位判断是否取过该值。
    //使用一个哈希表来保存之前取过的值，减少判断次数
    if (maxChoosableInteger * (maxChoosableInteger + 1) < (desiredTotal)) return false;
    const memo = new Map();
    const dfs = (state, curTotal, maxChoosableInteger, desiredTotal) => {
        if (!memo.has(state)) {
            let ans = false;
            for (let i = 0; i < maxChoosableInteger; i++) {
                if (((state >> i) & 1) == 1) continue;
                if (curTotal + 1 + i >= desiredTotal) {
                    ans = true;
                    break;
                }
                if (!(dfs(state | (1 << i), curTotal + 1 + i, maxChoosableInteger, desiredTotal))) {
                    ans = true;
                    break;
                }
            }
            memo.set(state, ans);
        }
        return memo.get(state)
    }
    return dfs(0, 0, maxChoosableInteger, desiredTotal);
};

console.log(canIWin(10, 11))