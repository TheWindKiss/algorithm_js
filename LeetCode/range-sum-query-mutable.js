//分块处理
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = Array.from(nums);
    const n = nums.length;
    this.sums = new Array(n).fill(0);
    this.size = Math.floor(Math.sqrt(n));
    for (let i = 0; i < n; i++) {
        this.sums[Math.floor(i / this.size)] += this.nums[i];
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    this.sums[Math.floor(index / this.size)] += (val - this.nums[index]);
    this.nums[index] = val;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let size = this.size;
    const blockL = Math.floor(left / size), indexL = left % size, blockR = Math.floor(right / size), indexR = right % size;
    if (blockL === blockR) {
        let sum = 0;
        for (let i = left; i <= right; i++) {
            sum += this.nums[i];
        }
        return sum;
    }
    let sum = 0;
    for (let i = indexL; i < size; i++) {
        sum += this.nums[blockL * size + i];
    }
    for (let i = 0; i <= indexR; i++) {
        sum += this.nums[blockR * size + i];
    }
    for (let i = blockL + 1; i < blockR; i++) {
        sum += this.sums[i];
    }
    return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */