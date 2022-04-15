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
    //优化了例子一中的一些情况，将,.[]的情况先判断，除去了对非数字情况的额外判断降低开销。
    //使用字符对数字进行保存，调用parseInt的使用次数，减少开销
    if (s[0] !== '[') return new NestedInteger(parseInt(s));
    const stack = [];
    let str = '';
    for (let ch of s) {
        if (ch === '[') stack.push(new NestedInteger());
        else if (ch === ']') {
            let pre = stack.pop();
            if (str.length > 0) {
                pre.add(new NestedInteger(parseInt(str)));
                str = '';
            }
            //栈中没有元素并且指针指向]必然是末尾
            if (stack.length === 0) return pre;
            stack[stack.length - 1].add(pre);
        }
        else if (ch === ',') {
            if (str.length > 0) stack[stack.length-1].add(new NestedInteger(parseInt(str)));
            str = '';
        } else {
            str += ch;
        }
    }
    return stack.pop();
};
