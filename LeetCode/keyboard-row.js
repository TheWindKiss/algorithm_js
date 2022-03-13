/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    /*     const line = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
        const check = (ch) => {
            for (const [index, value] of line.entries()) {
    
                if (value.indexOf(ch) !== -1) {
                    return index;
                }
            }
        }
        const ans = [];
        for (const word of words) {
            let pre = 0;
            let copy = word.toLowerCase();
            for (let i = 0; i < copy.length; i++) {
                if (i == 0) {
                    pre = check(copy[i]);
                } else {
                    const curr = check(copy[i]);
                    if (curr !== pre) {
                        console.log(copy[i])
                        console.log(curr);
                        console.log(pre);
                        console.log("------")
                        pre = curr;
                        break;
                    }
                    pre = curr;
                }
                if (i == copy.length - 1) {
                    ans.push(word);
                }
            }
        }
        return ans; */
    const ans = [];
    words.forEach((word) => {
        if (word.replace(/[qwertyuiop]/gi, '') === '' || word.replace(/[asdfghjkl]/gi, '') === '' || word.replace(/[zxcvbnm]/gi, '') === '') {
            ans.push(word);
        }
    })
    return ans;
};
console.log(findWords(["abdfs", "cccd", "a", "qwwewm"]))