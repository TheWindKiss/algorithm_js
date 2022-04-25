/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
     //空间换时间
    this.map=new Map();
    for(let [index,num] of nums.entries()){
        if(!this.map.has(num)){
            this.map.set(num,[]);
        }
        this.map.get(num).push(index);
        
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const indexs=this.map.get(target);
    return indexs[Math.floor(Math.random() * indexs.length)]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */