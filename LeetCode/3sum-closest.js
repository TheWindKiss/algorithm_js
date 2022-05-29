/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    const n=nums.length;
    let min=Number.MAX_VALUE;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        let [l,r]=[i+1,n-1];
        while(l<r){
            const sum=nums[i]+nums[l]+nums[r];
            if(Math.abs(sum-target)<Math.abs(min-target)){
                min=sum;
            }
            if(sum<target){
                l++;
            }else if(sum>target){
                r++;
            }else{
                return target;
            }
        }
    }
    return min;
};
console.log(threeSumClosest(
    [-1, 2, 1, -4, 2, 6, 8, 1, 53, 7, 4, 78, -2, 4, 67, 4, 2, 7, 21, 7, 8, 9], 3));