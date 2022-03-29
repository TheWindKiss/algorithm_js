/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    //滑动窗口，找到最长连续字符串，因为有k次修改，所以每当遇到不相同字符时先减k的次数，直到k变为0
    //当k为-1时，说明已经到需要移动左游标的时候了。
    return Math.max(getMaxLen(answerKey, 'T', k), getMaxLen(answerKey, 'F', k));
};
const getMaxLen = (arr, ch, k) => {
    const n = arr.length;
    let maxLen = 0, l = 0, r = 0;
    while (r < n) {
        //k次修改的机会
        k -= (arr[r] !== ch) ? 1 : 0;
        if (k === -1) {
            //移动左游标到第一个不相同字符的位置右边
            while (arr[l] === ch) l++;
            l++;
            k++;
        }
        r++;
        //比较该次滑动窗口长度
        maxLen = Math.max(maxLen, r - l);

    }
    return maxLen
}
console.log(maxConsecutiveAnswers("TFFT", 1))