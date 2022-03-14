/**
 * @param {number[]} nums
 * @return {number}
 */
/* var countMaxOrSubsets = function (nums) {
    //一般思路
    const n=nums.length;
    const limit=1<<n;
    let cnt=0,maxValue=0;
    for(let i=0;i<limit;i++){
        let value=0;
        for(let j=0;j<n;j++){
            //当第j位是1时选择该数
            if((i>>j)&1==1){
                value|=nums[j];
            }
        }
        if(value>maxValue){
            cnt=1;
            maxValue=value;
        }else if(value==maxValue)cnt++;
    }
    return cnt;
}; */

var countMaxOrSubsets = function (nums) {
    //回溯法
    const n = nums.length;
    let cnt = 0, maxValue = 0;
    const dfs = (pos, orVal) => {
        if (pos === n) {
            //递归到底时更新最大值和计数器
            if (orVal > maxValue) {
                maxValue = orVal;
                cnt = 1;
            } else if (orVal === maxValue) {
                cnt++;
            }
            return;
        }
        //可以选择使不使用nums[pos]进行或运算
        dfs(pos + 1, orVal | nums[pos]);
        dfs(pos + 1, orVal);
    }
    dfs(0, 0);
    return cnt;
};



console.log(countMaxOrSubsets([3, 1]))