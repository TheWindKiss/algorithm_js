/**
 * @param {number[]} stoneValue
 * @return {string}
 */
 var stoneGameIII = function(stoneValue) {
    const n=stoneValue.length;
    const suffixSum=new Array(n).fill(0);
    suffixSum[n-1]=stoneValue[n-1];
    for(let i=n-2;i>=0;i--){
        suffixSum[i]=suffixSum[i+1]+stoneValue[i];
    }
    const f=new Array(n+1).fill(0);
    for(let i=n-1;i>=0;i--){
        let best = f[i+1];
        for(let j=i+2;j<=i+3&&j<=n;j++){
            best=Math.min(f[j],best);
        }
        f[i]=suffixSum[i]-best;
    }
    let total = suffixSum[0];
    if(f[0]*2==total){
        return "Tie"
    }else{
        return f[0]*2>total?"Alice":"Bob";
    }
};

console.log(stoneGameIII([1,2,3,-9]))