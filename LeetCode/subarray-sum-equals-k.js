/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let sum=0;
        for(j=i;j<n;j++){
            sum+=nums[j];
            if(sum==k){
                ans++;
            }
        }
    }
    return ans;
};
console.log(subarraySum([1,2,3], k = 3))