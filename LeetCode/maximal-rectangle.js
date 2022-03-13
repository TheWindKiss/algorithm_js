/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let n = matrix.length;
    if(n==0){
        return 0
    }
    let m = matrix[0].length;
    let down = Array(n).fill(0).map(x => Array(m).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == '1')
                down[i][j] =(i==0 ? +matrix[i][j] : down[i-1][j] + 1)
        }
    }
    let ans=0;
    for(let i=0;i<down.length;i++){
        ans = Math.max(largestRectangleArea(down[i]),ans)
    }
    return ans
};
const largestRectangleArea = function (heights) {
    let n = heights.length;
    let left = []
    let right = Array(n).fill(n)

    let mono_stack = []
    for (let i = 0; i < n; ++i) {
        while (mono_stack.length > 0 && heights[mono_stack[mono_stack.length - 1]] >= heights[i]) {
            right[mono_stack[mono_stack.length - 1]] = i;
            mono_stack.pop();
        }
        left[i] = (mono_stack.length == 0 ? -1 : mono_stack[mono_stack.length - 1]);
        mono_stack.push(i);
    }
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
    }
    return ans;
};
console.log(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
))