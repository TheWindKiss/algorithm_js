/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    const target=p.val;
    let cur=root,ans=null;
    while(cur){
        if(cur.val>target){
            ans=cur;
            cur=cur.left;
        }else{
            cur= cur.right;
        }
    }
    return ans;
};