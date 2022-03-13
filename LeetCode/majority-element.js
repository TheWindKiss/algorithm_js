/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    /*     let map =new Map();
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1);
            }else{
                map.set(nums[i],1);
            }
        }
        let max=0;
        let ans;
        for([key,value] of map){
            if(max<value){
                max=value;
                ans=key
            }
        }
        return ans; */
/*     let left = 0;
    let right = 0;
    const n = nums.length;
    nums.sort((a,b)=>a-b);
    while (right < n) {
        if (nums[left] === nums[right]) {
            right++;
        } else {
            let len = right - left;
            let ans = nums[left];
            if (len > n / 2) {
                return ans
            }
            left = right;
            right++;
        }
    }
    return nums[n-1] */
    nums.sort((a,b)=>a-b);
    return nums[Math.floor((nums.length-1)/2)]

};

console.log(majorityElement([3, 2, 3]))