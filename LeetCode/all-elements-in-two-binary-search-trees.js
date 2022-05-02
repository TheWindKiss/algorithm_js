/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
     //中序遍历获得树的值放到数组中，再合并数组。
    const vals1=[],vals2=[];
    const inorder=(node,arr)=>{
        if(node){
            inorder(node.left,arr);
            arr.push(node.val);
            inorder(node.right,arr);
        }
    }
    inorder(root1,vals1);
    inorder(root2,vals2);
    let p1=0,p2=0;
    const ans=[],n=vals1.length,m=vals2.length;
    while(p1+p2<n+m){
        if(p1===n){
            for(let i=p2;i<m;i++){
                ans.push(vals2[i]);
            }
            break;
        }
        if(p2===m){
            for(let i=p1;i<n;i++){
                ans.push(vals1[i]);
            }
            break;
        }
        if(vals1[p1]<vals2[p2]){
            ans.push(vals1[p1++])
        }else{
            ans.push(vals2[p2++])
        }
    }
    return ans;
};