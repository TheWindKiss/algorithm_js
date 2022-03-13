/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function (nums) {
    let mx = Math.max(...nums);
    let c = new Array(mx + 1).fill(0);
    for (let num of nums) {
        c[num]++;
    }
    let ans = 0;
    for (let i = 1; i <= mx; i++) {
        let gc = 0;
        for (let j = 1; j * i <= mx; j++) {
            if (c[j * i] === 0) continue;
            gc = gcd(gc, j);
            if (gc == 1) break;
        }
        ans += (gc === 1)
    }
    return ans;

};
const gcd = (a, b) => {
    if (b == 0) return a;
    return gcd(b, a % b)
}
console.log(countDifferentSubsequenceGCDs([5,15,40,5,6]))