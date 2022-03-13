/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    dictionary.sort((a,b)=>{
        if(a.length!==b.length){
            return b.length-a.length
        }else{
            return a.localeCompare(b)
        }
    });
    for(let i=0;i<dictionary.length;i++){
        const word=dictionary[i];
        let left=0;
        let right=0;
        while(right<s.length&&left<word.length){
            if(word[left]==s[right]){
                left++;
            }
                right++; 
        }
        if(left==word.length){
            return word
        }
    }
    return ""
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]))