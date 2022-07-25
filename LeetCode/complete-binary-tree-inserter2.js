/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//学习官方题解中二进制表示的方法，将完全二叉树和二进制进行关联很值得学习；
/**
 * @param {TreeNode} root
 */
 var CBTInserter = function(root) {
   this.root=root;
   this.cnt=0;
   const queue=[];
   queue[0]=root;
   while(queue.length){
    this.cnt++;
    const node=queue.shift();
    if(node.left){
        queue.push(node.left);
    }
    if(node.right){
        queue.push(node.right);
    }
   }
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
    this.cnt++;
    const child =new TreeNode(val);
    let node=this.root;
    const length = (this.cnt.toString(2)).length-1;
    for(let i=length-1;i>=1;i--){
        if((this.cnt&(i<<1))!=0){
            node=node.right;
        }else{
            node=node.left;
        }
    }
    if((this.cnt&1)!==0){
        node.right=child;
    }else{
        node.left=child;
    }
    return node.val;

};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root; 
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */