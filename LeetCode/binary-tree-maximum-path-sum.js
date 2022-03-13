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
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSum=Number.NEGATIVE_INFINITY;
    const maxGain = function (root) {
        //maxGain用来获取当前结点的最大贡献度
        if (root == null) {
            return 0;
        }
        //获取当前左节点的最大贡献度
        let leftGain = Math.max(maxGain(root.left), 0);
         //获取当前右节点的最大贡献度
        let rightGain = Math.max(maxGain(root.right), 0);
        //计算当前节点的最大路径值
        let priceNewpath = root.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, priceNewpath);
        //返回当前路径的最大贡献度，为val+leftGain或者rightGain的最大值
        return root.val + Math.max(leftGain, rightGain);
    };
    maxGain(root);
    return maxSum;
};