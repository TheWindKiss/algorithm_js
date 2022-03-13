/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
       
        if (!numSet.has(num - 1)) {
            //找到连续字串中的最小值
            let currentNum = num;
            let cunrrentStreak = 1;
            while (numSet.has(currentNum + 1)) {
                //从最小值开始向上找到整个字串
                currentNum += 1;
                cunrrentStreak += 1;
            }
            //比较每个字串的长度找到最大的那个
            longestStreak = Math.max(longestStreak, cunrrentStreak)
        }
    }
    return longestStreak
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))