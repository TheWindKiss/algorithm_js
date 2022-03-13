/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length <= 3) {
        if(nums.length<3){
            return [];
        }
        if (nums[0] + nums[1] == -nums[2]) { return nums; } else {
            return [];
        }

    }
    let sortArr = nums.sort((a, b) => a - b);
    const n = sortArr.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
        console.log(sortArr[i])
        if (i > 0 && sortArr[i] == sortArr[i - 1]) {
            //当连续相等时，跳过该次循环，使用sortArr[i-1]的值，避免枚举元素重复
            continue;
        }
        let k = n - 1;
        let target = -nums[i];
        for (let j = i + 1; j < n; j++) {
            if (j > i + 1 && sortArr[j] == sortArr[j - 1]) {
                //当连续相等时，跳过该次循环，使用sortArr[j-1]的值，避免枚举元素重复
                continue;
            }
            console.log("k:"+k)
            while (j < k && sortArr[j] + sortArr[k] > target) {
                //双指针，当sortArr[k]不满足条件时减1，减少时间复杂度
                k--;
            }
            if (j == k) {
                break;
            }
            console.log(sortArr[k]+"-----"+sortArr[j])
            if (sortArr[k] + sortArr[j] === target) {
                let item = [sortArr[i], sortArr[j], sortArr[k]];
                ans.push(item);

            }
        }
    }
    return ans;
};

console.log(threeSum([0,0,0,0]))