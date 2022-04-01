/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canReorderDoubled = function(arr) {
    const map=new Map();
    for(let item of arr){
        map.set(item,(map.get(item)||0)+1);
    }
    if(map.has(0)&&map.get(0)%2===1)return false;
    const keys=Array.from(map.keys());
    //这里排序减少了排序的次数，降低开销
    keys.sort((a,b)=>Math.abs(a)-Math.abs(b));
    for(let key of keys){
        let double=key*2;
       if((map.get(double)||0)<map.get(key)){
           return false;
       }
       map.set(double,(map.get(double)||0)-map.get(key));
    }
    return true;
};
console.log(canReorderDoubled([4,-2,2,-4]));