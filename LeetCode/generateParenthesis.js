/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = [];
    let str = "";
    let count1=0;
    let count2=0;
    f(ans,count1,count2,str,n)
    return ans;

};
function f(ans,count1,count2,str,n ){
  if(count1>n ||count2>n){
    return ;
  }
  if(count1===n&&count2===n){
    ans.push(str);
  }
  if(count1 >= count2){
    f(ans, count1+1, count2, str+"(",n);
    f(ans,  count1, count2+1,str+")" ,n);
    
}
}

console.log(generateParenthesis(3))
