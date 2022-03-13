var SummaryRanges = function() {
    this.list=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
 this.list.push(val)
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  const list=this.list
    if(list.length==1){
        let val=list[0];
        const ans=[[val,val]]
        return ans;
    }
    const ans=[]
    list.sort((a,b)=>a-b);
    let l=list[0];
    for(let i=1;i<list.length;i++){
        if(list[i]-list[i-1]>1){
            ans.push([l,list[i-1]]);
            l=list[i];
        }
    }
    ans.push([l,list[list.length-1]]);
    return ans
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */