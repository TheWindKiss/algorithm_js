/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
function NestedInteger() {
    /**
     * 
     * @param {*} elem 
     * @return {void}
     */
    this.add = function (elem) {
        return
    };
}
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
    //使用栈的写法
    //单一整数的情况
    if (s[0] !== '[') return new NestedInteger(parseInt(s));
    const stack = [], n = s.length;
    let num = 0, flag = false;
    for (let i = 0; i < n; i++) {
        const ch = s[i];
        if (checkNum(ch)) {
            num = num * 10 + parseInt(ch);
        } else if (ch === '-') {
            flag = true;
        } else if (ch === '[') {
            stack.push(new NestedInteger());
        } else if (ch === ']' || ch === ',') {
            if (checkNum(s[i - 1])) {
                if (flag) num *= -1;
                stack[stack.length - 1].add(new NestedInteger(num));
            }
            num = 0;
            flag = false;
            if (ch === ']' && stack.length > 1) {
                const item = stack.pop();
                stack[stack.length - 1].add(item);
            }
        }
    }
    return stack.pop();
};
const checkNum = (ch) => {
    return !isNaN(parseInt(ch))
}