/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    //双指针，
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let ans = 0;
    while (left < right) {
        //取左右两边扫描过程中的最大值
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            //当height[left] < height[right]时必有leftMax<rightMax
            ans += leftMax - height[left];
            left++;
        } else {
            ans += rightMax - height[right];
            right--;
        }
    }
    return ans
};

/* var trap = function(height) {
    //将整个看作一个1x1格子组成，正序遍历一边获取一个leftMax数组，逆序遍历一边获取rightMax数组
    //相同坐标下leftMax和rightMax最小值，与同坐标下的原数组值比较获取这列能放置的水滴数。
    const n = height.length;
    if (n == 0) {
        return 0;
    }

    const leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for (let i = 1; i < n; ++i) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    const rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; --i) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return ans;
};
 */
/* var trap = function(height) {
    //单调栈
let ans = 0;
const stack = [];
const n = height.length;
for (let i = 0; i < n; ++i) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
        const top = stack.pop();
        if (!stack.length) {
            break;
        }
        const left = stack[stack.length - 1];
        const currWidth = i - left - 1;
        const currHeight = Math.min(height[left], height[i]) - height[top];
        ans += currWidth * currHeight;
    }
    stack.push(i);
}
return ans;
} */
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))