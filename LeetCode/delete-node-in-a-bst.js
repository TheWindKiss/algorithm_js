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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
     //思路：找到目标删除节点，然后寻找该节点右子树的最左叶节点。将目标节点的左节点都拼接过去。
    if(root ===null)return root;
    if(root.val>key) {
        root.left=deleteNode(root.left,key);
    }else if(root.val<key){
        root.right=deleteNode(root.right,key);
    }else{
            let successor=root.right;
            while(successor!=null&&successor.left!=null){
                successor=successor.left;
            }
            if(successor!=null){
                successor.left=root.left;
                return root.right;
            }else{
                return root.left;
            }
        
    }
    return root;
};