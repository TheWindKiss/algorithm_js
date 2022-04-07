/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
    /* const n=s.length,m=goal.length;
     if(n!==m)return false;
     let i=0;
     while(i<n){
         if(s===goal)return true;
         s= s.slice(1,n)+s[0];
         i++;
     }
     return false;
     */
      return s.length === goal.length && (s + s).indexOf(goal) !== -1;
 };