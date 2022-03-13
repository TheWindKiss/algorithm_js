/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let maxprice =0;
    let n = prices.length;
    for (let i = 1; i < n; i++) {
        if(min>prices[i]){
            //找到历史最低点
            min=prices[i]
        }else if(prices[i]-min>maxprice){
            //从该历史最低点之后的天数中找到最大值
            maxprice=prices[i]-min
        }
    }
    return maxprice
};

console.log(maxProfit([7,6,4,3,1]))