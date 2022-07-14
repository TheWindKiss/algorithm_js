/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    let odd=0,even=0;
    for(let chip of position){
        chip%2==0?odd++:even++;
    }
    return Math.min(odd,even);
};
