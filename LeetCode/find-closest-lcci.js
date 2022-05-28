/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var findClosest = function(words, word1, word2) {
    const n = words.length;
    let l=-Number.MAX_VALUE,r=-Number.MAX_VALUE,ans=Number.MAX_VALUE;
    for(let i=0;i<n;i++){
        if(words[i]===word1){
            l=i;
            ans = Math.min(ans,Math.abs(l-r))
        }
        if(words[i]===word2){
            r=i;
            ans = Math.min(ans,Math.abs(l-r))
        }
    }
    return ans;
};