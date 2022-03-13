/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function (nums) {
    const n = nums.length;
    const diffs = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let low = (i + 1) % n;
        let high = (i - nums[i] + n + 1) % n;
        diffs[low]++;
        diffs[high]--;
        if (low > high) {
            diffs[0]++;
        }
        console.log(diffs)
    }
    let bestIndex = 0, maxScore = 0, score = 0;
    for (let i = 0; i < n; i++) {
        score += diffs[i];
        if (score > maxScore) {
            bestIndex = i;
            maxScore = score
        }
    }
    return bestIndex;

};
console.log(bestRotation([1, 3, 0, 2, 4]))