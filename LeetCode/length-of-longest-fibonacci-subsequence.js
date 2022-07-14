/**
 * @param {number[]} arr
 * @return {number}
 */
 var lenLongestFibSubseq = function(arr) {
    const n=arr.length, dp=new Array(n).fill(0).map(()=>new Array(n).fill(0)),map = new Map();
    for(let i=0;i<n;i++){
        map.set(arr[i],i);
    }
    let ans=0;
    for(let i=2;i<n;i++){
        for(let j=i-1;j>=0&&arr[j]*2>arr[i];j--){
            let k=map.get(arr[i]-arr[j]);
            if(k>=0) dp[i][j]=Math.max(dp[j][k]+1,3);
            ans=Math.max(dp[i][j],ans);
        }

    }
    return ans;
};