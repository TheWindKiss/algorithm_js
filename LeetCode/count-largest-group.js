/**
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    const map = new Map();
    let max=0;
    for(let i=1;i<=n;i++){
        const str = (""+i).split("");
        let digit = 0;
        str.forEach((ch)=>digit=+ch+digit);
        const count=(map.get(digit)||0)+1;
        map.set(digit,count);
        max=Math.max(max,count);
    }
    let ans=0;
    for(const value of map.values()){
        if(value==max){
            ans+=1;
        }
    }
    return ans;
};
console.log(countLargestGroup(13))