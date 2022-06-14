/**
 * @param {string} s
 * @return {number}
 */
const map1 = new Map();
map1.set('I', 1).set('V', 5).set('X', 10).set('L', 50).set('C', 100).set('D', 500).set('M', 1000);
const arr=[['IV',2],['IX',2],['XL',20],['XC',20],['CD',200],['CM',200]];
var romanToInt = function (s) {
    //将特殊情况拿出来匹配，减少思维量
    const n=s.length;
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=map1.get(s[i]);
    }
    for(let [re,num] of arr){
        ans -= s.includes(re)?num:0;
    }
    return ans;
};
console.log(romanToInt("CMXCIX"))