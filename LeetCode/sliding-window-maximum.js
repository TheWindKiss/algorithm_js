/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const n = nums.length;
    const q = [];
    for (let i = 0; i < k; i++) {
        //保留窗口最大值在最左侧
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
    }

    const ans = [nums[q[0]]];
    for (let i = k; i < n; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        //如果数组长度大于窗口长度，循环缩减到窗口长度
        while (q[0] <= i - k) {
            q.shift();
        }
        //将左侧也就是窗口最大值放到答案中
        ans.push(nums[q[0]]);
    }
    return ans;

};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))