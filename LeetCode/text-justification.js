/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const ans = [];
    let right = 0, n = words.length;
    while (true) {
        const left = right;
        let sumLen = 0;
        while (right < n && sumLen + words[right].length + right - left <= maxWidth) {
            sumLen += words[right].length;
            right++
        }
        if (right === n) {
            const s = words.slice(left).join(' ');
            ans.push(s + blank(maxWidth - s.length));
            break;
        }
        const numWords = right - left;
        const numSpace = maxWidth - sumLen;

        if (numWords === 1) {
            ans.push(words[left] + blank(numSpace));
            continue;
        }
        const avgSpace = Math.floor(numSpace / (numWords - 1));
        const extraSpace = numSpace % (numWords - 1);
        const s1 = words.slice(left, left + extraSpace + 1).join(blank(avgSpace + 1));
        const s2 = words.slice(left + extraSpace + 1, right).join(blank(avgSpace));
        ans.push(s1 + blank(avgSpace) + s2);
    }
    return ans;
}

const blank = (n) => {
    return new Array(n).fill(' ').join('');
}

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))