/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/*  对于任意一颗树而言，前序遍历的形式总是
 [ 根节点, [左子树的前序遍历结果], [右子树的前序遍历结果] ]
 即根节点总是前序遍历中的第一个节点。而中序遍历的形式总是
 [ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ] */
 
var buildTree = function (preorder, inorder) {
    let n = preorder.length;
    indexMap = new Map()
    const myBuildTree = function (preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) {
        if (preorder_left > preorder_right) {
            return null;
        }
        // 前序遍历中的第一个节点就是根节点
        let preorder_root = preorder_left;
        // 在中序遍历中定位根节点
        let inorder_root = indexMap.get(preorder[preorder_root]);

        // 先把根节点建立出来
        let root = new TreeNode(preorder[preorder_root]);
        // 得到左子树中的节点数目
        let size_left_subtree = inorder_root - inorder_left;
        // 递归地构造左子树，并连接到根节点
        // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
        root.left = myBuildTree(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1);
        // 递归地构造右子树，并连接到根节点
        // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
        root.right = myBuildTree(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right);
        return root;

    }
    for (let i = 0; i < n; i++) {
        indexMap.set(inorder[i], i);
    }
    return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);

};
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))