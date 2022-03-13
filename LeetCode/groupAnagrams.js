/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let n=strs.length;
    let map =new Map();
    let ans=[]
    for(let i=0;i<n;i++){
        //直接创建数组，速度比使用split快
        let str=Array.from(strs[i]).sort().join("")
        if(map.has(str)){
            map.get(str).push(strs[i])
        }else{
            map.set(str,[strs[i]])
        }
    }
    map.forEach((value)=>{
        ans.push(value)
    })
   return ans
};
console.log(groupAnagrams(["a"]))