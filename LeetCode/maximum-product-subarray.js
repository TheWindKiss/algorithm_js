/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    const n=nums.length
    let arrMax = nums.slice();
    let arrMin =nums.slice();
    for(let i=1;i<n;i++){
        arrMax[i] = Math.max(arrMax[i-1]*nums[i],Math.max(arrMin[i-1]*nums[i]),nums[i]);
        arrMin[i] = Math.min(arrMin[i-1]*nums[i],Math.min(arrMax[i-1]*nums[i],nums[i]));
    }
    return Math.max(...arrMax)
};

console.log(maxProduct( [-2,3,-4]))