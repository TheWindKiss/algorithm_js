/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let maxWealth=0;
    accounts.forEach((item)=>{
        maxWealth=Math.max(maxWealth,item.reduce((a,b)=>a+b),0)
    })
    return maxWealth
};