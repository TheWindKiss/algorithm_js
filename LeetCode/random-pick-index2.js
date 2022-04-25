/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    //时间换空间，用蓄水池抽样的方法
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let idx = 0, result = -1;
    const n=this.nums.length;
    for (let i=0;i<n;i++) {
        if (this.nums[i] === target) {
            idx++;
            if (Math.floor(Math.random() * idx) === 0) {
                result = i;
            }
        }
    }
    return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */