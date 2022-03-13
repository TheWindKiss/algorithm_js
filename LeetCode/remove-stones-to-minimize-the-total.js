/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
    piles.sort((a, b) => b - a);
    let flag = Math.floor(piles[0] / 2);
    let i = 0;
    while (k > 0) {
        if (piles[i] <= flag) {
            piles.sort((a, b) => b - a);
            flag = Math.floor(piles[0] / 2);
            console.log(flag)
            i = 0;
        }
        if (i > piles.length - 1) {
            i = 0;
        }
        piles[i] = piles[i] - Math.floor(piles[i] / 2);
        console.log(piles)
        k--;
        i++;
    }
    let sum = 0;
    for (const pile of piles) {
        sum += pile;
    }
    return sum
};
console.log(minStoneSum([4122,9928,3477,9942]
    , 6))