/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//难点在于中文的题意不好懂，思路是：将所有符合子树插入的结点都放到一个队列中，优先度倒数第二层从左到右然后是最后一层从左到右
/**
 * @param {TreeNode} root
 */
 var CBTInserter = function(root) {
    this.candidate =[]//可以插入子树的候选结点列表
    this.root = root;
    const queue=[];
    queue.push(root);
    while(queue.length){
        const node = queue.shift();
        if(node.left)queue.push(node.left);
        if(node.right)queue.push(node.right);
        if(!(node.right&&node.left))this.candidate.push(node);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
    const child = new TreeNode(val);
    const node = this.candidate[0]//候选队列中的第一个结点
    let ret=node.val;
    if(!node.left)node.left=child;
    else if(!node.right){
        node.right=child
        this.candidate.shift();//候选结点左右都有子树失去候选资格出列；
    }
    this.candidate.push(child)//子节点加入候选节点队列
    return ret
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