/**
 * @param {string} expression
 * @return {string}
 */
 var fractionAddition = function(expression) {
    //思路就是纯模拟，先替换-为+-，分割字符串，分别求出分子和分母的通分结果，再根据辗转相除法求出最大公约数，返回最简数
    const newe= expression.replace(/-/g,'+-');
    const arr = newe.split('+'),n=arr.length;
    const nums=[];
    for(let i=0;i<n;i++){
        nums[i]=arr[i].split('/');
    }
    let den=0,nume=1;
    for(let i=0;i<n;i++){
        if(nums[i][0]=='')continue;
        nume*=nums[i][1];
    }
    for(let i=0;i<n;i++){
        if(nums[i][0]=='')continue;
        den+=(+nums[i][0])*(nume/nums[i][1]);
    }
     const g=Math.abs(gcd(den,nume));
     return `${den/g}/${nume/g}`
};
const gcd =(a,b)=>{
    if(b==0)return a;
    else return gcd(b,a%b);
}