/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
/*     const ans=[];
    for(let i=0;i<nums.length;i++){
        const index =ans.indexOf(nums[i]);
        if(index<0){
            ans.push(nums[i]);
        }else{
            console.log(ans);
            ans.splice(index,1);
            console.log(ans);
            console.log('----')
        }
    }
    return ans; */
    let xorsum = 0;
    
    for (const num of nums) {
        xorsum ^= num;
    }
    let type1 = 0, type2 = 0;
    const lsb = xorsum & (-xorsum);
    console.log(xorsum)
    console.log(lsb)
    for (const num of nums) {
        if (num & lsb) {
            type1 ^= num;
        } else {
            type2 ^= num;
        }
    }
    return [type1, type2];

};

console.log(singleNumber([1,2]));