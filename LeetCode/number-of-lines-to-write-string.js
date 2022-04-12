/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 const codeA='a'.charCodeAt();
 var numberOfLines = function(widths, s) {
     let len=0,ans=[1,0];
     for(let ch of s){
         let width=widths[ch.charCodeAt()-codeA];
         len+=width;
         if(len>100){
             len=width;
             ans[0]++;
         }
     }
     ans[1]=len;
     return ans;
 };