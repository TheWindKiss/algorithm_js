/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    const n = candyType.length /2;
    const map =new Map();
    for(const candy of candyType){
        map.set(candy,map.get(candy)==undefined?1:map.get(candy)+1)
    }
    return map.size>=n?n:map.size;
};
console.log(distributeCandies( [1,1,2,3]))