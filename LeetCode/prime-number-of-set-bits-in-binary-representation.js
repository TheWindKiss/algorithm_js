/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 const PIRIMS=[2,3,5,7,11,13,17,19]
 var countPrimeSetBits = function(left, right) {
     let cnt=0;
     for(let i=left;i<=right;i++){
         if(PIRIMS.includes(getOneCnt(i)))cnt++;
     }
     return cnt;
 };
 const getOneCnt=(num)=>{
     return num.toString(2).replace(/[0]/g,'').length;
 
 }