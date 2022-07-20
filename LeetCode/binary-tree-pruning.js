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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    //记录问题 return 默认返回时undefine不是null，二者有一定区别
    if (root == null) return null;
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if (root.left == null && root.right == null) {
        if (root.val == 0) return null;
    }
    return root;
};