/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length;
    let left = []
    let right =Array(n).fill(n)
    
    let mono_stack = []
    for (let i = 0; i < n; ++i) {
        while (mono_stack.length>0 && heights[mono_stack[mono_stack.length-1]] >= heights[i]) {
            right[mono_stack[mono_stack.length-1]] = i;
            mono_stack.pop();
        }
        left[i] = (mono_stack.length==0 ? -1 : mono_stack[mono_stack.length-1]);
        mono_stack.push(i);
    }
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
    }
    return ans;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))