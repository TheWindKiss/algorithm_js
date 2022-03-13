/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let subStr = word.substring(1);
    if (word[0].charCodeAt() > 96) {
        let str = subStr.replace(/[a-z]+/g, "");
        return str == ''
    } else {
        let str = subStr.replace(/[A-Z]+/g, "");
        return str.length == subStr.length || str.length == 0;
    }
};
console.log(detectCapitalUse("FlaG"))