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
    //使用JSON进行对象转换判断是否包括数组，，递归形式将数组项添加到NestedInteger中。
    //简单易懂，只适合js。
    let js = JSON.parse(s)

    let parse = function (value) {
        let res = new NestedInteger()

        if (Array.isArray(value)) {
            value.forEach(v => {
                res.add(parse(v))
            })
        } else {
            res.setInteger(value)
        }

        return res
    }

    return parse(js)
};
