/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const leftStack = [];
    const startStack = [];
    const n = s.length;
    //循环将(和*放入相应的栈中，如果遇到)，首先判断左括号栈中有无元素，如果没有判断星栈中有无元素，都无返回false
    for (let i = 0; i < n; i++) {
        const char = s[i];
        if (char === '(') {
            leftStack.push(i);
        } else if (char === "*") {
            startStack.push(i);
        } else {
            if (leftStack.length) {
                leftStack.pop()
            } else if (startStack.length) {
                startStack.pop()
            } else {
                return false;
            }
        }
    }
    //判断剩余星栈和左括号栈能否匹配，星栈不能匹配左括号返回false
    while (leftStack.length && startStack.length) {
        const leftIndex = leftStack.pop();
        const startIndex = startStack.pop();
        if (leftIndex > startIndex) {
            return false;
        }
    }
    return leftStack.length === 0;
};
console.log(checkValidString("()()(*))"))

//贪心算法
/* 从左到右遍历字符串，遍历过程中，未匹配的左括号数量可能会出现如下变化：
如果遇到左括号，则未匹配的左括号数量加 1；
如果遇到右括号，则需要有一个左括号和右括号匹配，因此未匹配的左括号数量减 1；
如果遇到星号，由于星号可以看成左括号、右括号或空字符串，因此未匹配的左括号数量可能加 1、减 1 或不变。
基于上述结论，可以在遍历过程中维护未匹配的左括号数量可能的最小值和最大值，根据遍历到的字符更新最小值和最大值：
如果遇到左括号，则将最小值和最大值分别加 1；
如果遇到右括号，则将最小值和最大值分别减 1；
如果遇到星号，则将最小值减 1，将最大值加 1。 */

/* var checkValidString = function(s) {
    let minCount = 0, maxCount = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (c === '(') {
            minCount++;
            maxCount++;
        } else if (c === ')') {
            minCount = Math.max(minCount - 1, 0);
            maxCount--;
            if (maxCount < 0) {
                return false;
            }
        } else {
            minCount = Math.max(minCount - 1, 0);
            maxCount++;
        }
    }
    return minCount === 0;
};
 */