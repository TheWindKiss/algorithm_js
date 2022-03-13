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
 * @return {void} Do not return anything, modify root in-place instead.
 */
/* var flatten = function (root) {
    let list = []
    preorder(root, list);
    const n = list.length;
    for (let i = 1; i < n; i++) {
        list[i - 1].left = null;
        list[i - 1].right = list[i]
    }
};
const preorder = function (root, list) {
    if (root !== null) {
        list.push(root)
        preorder(root.left, list);
        preorder(root.right, list)
    }
} */

/* 注意到前序遍历访问各节点的顺序是根节点、左子树、右子树。如果一个节点的左子节点为空，
则该节点不需要进行展开操作。如果一个节点的左子节点不为空，则该节点的左子树中的最后一个节点被访问之后，
该节点的右子节点被访问。该节点的左子树中最后一个被访问的节点是左子树中的最右边的节点，也是该节点的前驱节点。
因此，问题转化成寻找当前节点的前驱节点。
具体做法是，对于当前节点，如果其左子节点不为空，则在其左子树中找到最右边的节点，
作为前驱节点，将当前节点的右子节点赋给前驱节点的右子节点，
然后将当前节点的左子节点赋给当前节点的右子节点，并将当前节点的左子节点设为空。
对当前节点处理结束后，继续处理链表中的下一个节点，直到所有节点都处理结束。
 */
var flatten = function (root) {
    let curr = root;
    while (curr) {
        if (curr.left !== null) {
            const next = curr.left;
            let prodecessor = next;
            while (prodecessor.right !== null) {
                prodecessor = prodecessor.right
            };
            prodecessor.right = curr.right;
            curr.left = null;
            curr.right = next;
        }
        curr = curr.right;
    }

}
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}