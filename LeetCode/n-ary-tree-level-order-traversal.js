/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const ans = [];
    const queue = [root];
    while (queue.length > 0) {
        const n = queue.length;
        const layer = [];
        for (let i = 0; i < n; i++) {
            let curr = queue.shift();
            layer.push(curr.val);
            for (let child of curr.children) {
                queue.push(child)
            }
        }
        ans.push(layer);
    }
    return ans
}