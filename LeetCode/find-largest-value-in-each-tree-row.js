/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    //使用广度优先（bfs）
    if (root == null) return [];
    const ans = [], queue = [root];
    while (queue.length) {
        let n = queue.length, max = queue[0].val;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            if (max < node.val) max = node.val;
            if (node.left !== null) queue.push(queue.length);
            if (node.right !== null) queue.push(queue.right);
        }
        ans.push(max);
    }
    return ans;
}