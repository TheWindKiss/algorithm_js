/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    /*    差分数组对应的概念是前缀和数组，对于数组 [1,2,2,4][1,2,2,4]，其差分数组为 [1,1,0,2][1,1,0,2]，差分数组的第 ii 个数即为原数组的第 i-1i−1 个元素和第 ii 个元素的差值，也就是说我们对差分数组求前缀和即可得到原数组。
   
   差分数组的性质是，当我们希望对原数组的某一个区间 [l,r][l,r] 施加一个增量\textit{inc}inc 时，差分数组 dd 对应的改变是：d[l]d[l] 增加 \textit{inc}inc，d[r+1]d[r+1] 减少 \textit{inc}inc。这样对于区间的修改就变为了对于两个位置的修改。并且这种修改是可以叠加的，即当我们多次对原数组的不同区间施加不同的增量，我们只要按规则修改差分数组即可。
   
   在本题中，我们可以遍历给定的预定记录数组，每次 O(1)O(1) 地完成对差分数组的修改即可。当我们完成了差分数组的修改，只需要最后求出差分数组的前缀和即可得到目标数组。
   
    */
    const nums = new Array(n).fill(0);
    for (const booking of bookings) {
        nums[booking[0] - 1] += booking[2];
        if (booking[1] < n) {
            nums[booking[1]] -= booking[2];
        }
        console.log(nums)
    }
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
}
console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5))