/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const n = temperatures.length;
    const ans = new Array(n).fill(0);
    const stack = [];
    for (let i = 0; i < n; i++) {
        let item = temperatures[i];
        while (stack.length != 0 && item > temperatures[stack[stack.length - 1]]) {
            let pre = stack.pop();
            ans[pre] = i - pre;

        }
        stack.push(i);
    }
    return ans

};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))