/**
 * @param {string} p
 * @return {number}
 */
 var findSubstringInWraproundString = function(p) {
    const dp=new Array(26).fill(0),n=p.length;
    for(let i=0,j=0;i<n;i++){
        if(i>0&&(p[i].charCodeAt()-p[i-1].charCodeAt()+26)%26==1){
            j++;
        }else{
            j=1;
        }
        const idx=p[i].charCodeAt()-97;
        dp[idx]=Math.max(dp[idx],j);
    }
    return dp.reduce((a,b)=>a+b,0);
};