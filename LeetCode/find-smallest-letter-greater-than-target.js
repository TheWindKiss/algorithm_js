/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    //二分查找，类比找比target大的最小值
    const n = letters.length;
    if (letters[n - 1] <= target) return letters[0];
    let low = 0, high = n - 1;
    while (low < high) {
        const mid = (low + high) >> 1;
        if (letters[mid] > target) {
            high = mid
        } else {
            low = mid + 1;
        }
    }
    return letters[low];
};
console.log(nextGreatestLetter(["c", "f", "j"]))