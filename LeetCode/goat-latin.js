/**
 * @param {string} sentence
 * @return {string}
 */
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);//大小写都要
var toGoatLatin = function (sentence) {
    //模拟题目的转换条件
    const convert = (word, idx) => {
        const res = [];
        if (VOWELS.has(word[0])) {
            res.push(word)
        } else {
            res.push(word.substring(1))
            res.push(word.substring(0, 1));
        }
        res.push('ma');
        for (let i = 0; i <= idx; i++) {
            res.push('a');
        }
        return res.join('')
    }
    return sentence.split(' ').map((word, idx) =>
        convert(word, idx)
    ).join(' ')
};
console.log(toGoatLatin("I speak Goat Latin"))