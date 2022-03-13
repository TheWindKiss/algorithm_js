/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let n = s.length;
    const wordSet=new Set(wordDict)
    let dp = new Array(n+1).fill(false);
    dp[0]=true;
    for(let i=0;i<=n;i++){
        for(let j=0;j<i;j++){
            if(dp[j]&&wordSet.has(s.substr(j,i-j))){
                dp[i]=true;
                break
            }
        }
    }
    return dp[n]
};

console.log(wordBreak("applepenapple", ["apple", "pen"]))