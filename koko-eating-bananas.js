/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    //第一次遇到这种题目，二分查找最接近的值
    let l=1,r=Math.max(...piles);
    while(l<r){
        let mid = Math.floor((l+r)/2);
        let time = piles.reduce((pre,cur)=>pre+Math.ceil(cur/mid),0);
        if(time<=h)r=mid;
        else l=mid+1;
    }
    return l;
};