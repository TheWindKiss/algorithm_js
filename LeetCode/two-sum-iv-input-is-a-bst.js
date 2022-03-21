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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    const set=new Set();
    return dfs(root,set,k)
};
    const dfs=(node,set,k)=>{
    if(node===null)return false;
    if(set.has(k-node.val))return true;
    set.add(node.val);
    return dfs(node.left,set,k)||dfs(node.right,set,k);
}