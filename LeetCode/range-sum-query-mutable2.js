//树状数组的做法
/**
 * @param {number[]} nums
 */
 var NumArray = function (nums) {
    const n = nums.length;
    this.nums = Array.from(nums);
    this.treeArr = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < n; i++) {
        this.add(i + 1, nums[i]);
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    this.add(index + 1, val - this.nums[index]);
    this.nums[index] = val;
};
/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.add = function (index, val) {
    const n = this.treeArr.length;
    while (index < n) {
        this.treeArr[index] += val;
        index += this.lowBit(index);
    }
};

/** 
 * @param {number} x 
 * @return {number}
 */
NumArray.prototype.lowBit = function (x) {
    return x & -x
};

/** 
 * @param {number} index 
 * @return {number}
 */
NumArray.prototype.prefixSum = function (index) {
    let sum = 0;
    while (index > 0) {
        sum += this.treeArr[index];
        index -= this.lowBit(index);
    }
    return sum;
};
/**
 * 
 * @param {number} left 
 * @param {number} right 
 * @returns {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.prefixSum(right + 1) - this.prefixSum(left);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */