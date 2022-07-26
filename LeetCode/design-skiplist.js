//学习跳表的概念，题解为官方答案。
const MAX_LEVEL = 32;
const P_FACTOR = 0.25;
var Skiplist = function() {
    this.head = new SkiplistNode(-1, MAX_LEVEL);
    this.level = 0;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function(target) {
    let cur =this.head;
    for(let i=this.level-1;i>=0;i--){
        while(cur.forward[i]&&cur.forward[i].val<target)
            cur=cur.forward[i];
    }
    cur=cur.forward[0];
    if(cur&&cur.val==target)return true;
    return false;
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(num) {
    const update=new Array(MAX_LEVEL).fill(this.head);
    let cur=this.head;
    for(let i=this.level-1;i>=0;i--){
        while(cur.forward[i]&&cur.forward[i].val<num){
            cur=cur.forward[i];
        }
        update[i]=cur;
    }
    const lv = randomLevel();
    this.level=Math.max(this.level,lv);
    const newNode = new SkiplistNode(num, lv);
    for (let i = 0; i < lv; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
    }
};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(num) {
    const update = new Array(MAX_LEVEL).fill(0);
    let cur = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
        /* 找到第 i 层小于且最接近 num 的元素*/
        while (cur.forward[i] && cur.forward[i].val < num) {
            cur = cur.forward[i];
        }
        update[i] = cur;
    }
    cur = cur.forward[0];
    if (!cur || cur.val !== num) {
        return false;
    }
    for (let i = 0; i < this.level; i++) {
        if (update[i].forward[i] !== cur) {
            break;
        }
        /* 对第 i 层的状态进行更新，将 forward 指向被删除节点的下一跳 */
        update[i].forward[i] = cur.forward[i];
    }
    /* 更新当前的 level */
    while (this.level > 1 && !this.head.forward[this.level - 1]) {
        this.level--;
    }
    return true;
};
const randomLevel=()=>{
    let lvl =1;
    while(Math.random()<P_FACTOR&&lvl<MAX_LEVEL){
        lvl++;
    }
    return lvl;
}
class SkiplistNode {
    constructor(val,maxLevel){
        this.val=val;
        this.forward=new Array(maxLevel).fill(0);
    }
}
/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */