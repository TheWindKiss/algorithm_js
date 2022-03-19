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
 * @return {string}
 */
var tree2str = function (root) {
    if (!root) return "";
    //叶节点
    if (!root.left && !root.right) {
        return '' + root.val;
    }
    //无右节点的情况
    if (!root.right) {
        return root.val + '(' + tree2str(root.left) + ')';
    }
    //左右子节点都存在
    return root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')'
};
