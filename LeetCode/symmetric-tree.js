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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const check = function (p, q) {
        //当左子树和右子树同时为null的时，说明已经check完，返回true
        if (q == null && p == null) {
            return true
        }
        //当左子树和右子树为null时，说明长度不同，不是对称二叉树
        if (q == null || p == null) {
            return false
        }
        //递归check左右子树的对称情况
        return p.val == q.val && check(p.left, q.right) && check(p.right, q.left);
    }
    return check(root.left, root.right)
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}