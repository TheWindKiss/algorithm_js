//思路
//数组的查找是O1，哈希表的插入与删除是O1.为了符合题意需要将这两者结合起来
//在数组中存储值，在哈希表中存储元素在数组中的下标
var RandomizedSet = function() {
    this.map=new Map();
    this.nums=[];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val))return false;
    let index= this.nums.length;
    //插入数组末尾
    this.nums.push(val);
    //存储下标
    this.map.set(val,index);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val))return false;
    //获取下标
    let index = this.map.get(val);
    this.nums[index]=this.nums[this.nums.length-1];
    //将要删除的元素交换到数组末尾然后弹出
    this.nums.pop();
    //将交换的元素下标在哈希表中存储
    this.map.set(this.nums[index],index);
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const radomNum= Math.floor(Math.random()*this.nums.length);
    return this.nums[radomNum];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */