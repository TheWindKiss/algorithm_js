/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    let maxStr = '';
    const CODEA = 'A'.charCodeAt();
    const DIFF = 'a'.charCodeAt() - CODEA;
    const walk = (s) => {
        const temp = new Array(100).fill(0);
        for (let char of s) {
            temp[char.charCodeAt() - CODEA] = 1;
        }
        for (let i = 0; i < 26; i++) {
            if (temp[i] === 1 && temp[i + DIFF] === 0) s = s.replace(String.fromCharCode(i + CODEA), '-');
            else if (temp[i] === 0 && temp[i + DIFF] === 1) s = s.replace(String.fromCharCode(i + CODEA + DIFF), '-');
        }
        let ss = s.split('-');
        if (ss.length === 1) {
            maxStr = maxStr.length >= ss[0].length ? maxStr : ss[0];
            return;
        }
        if (ss.length === 0) return;
        for (let i = 0; i < ss.length; i++) {
            walk(ss[i]);
        }
    }
    walk(s);
    return maxStr;
};

console.log(longestNiceSubstring("dDzeE"));