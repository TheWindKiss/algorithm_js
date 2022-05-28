/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    const stack = [];
    let flag = 0;
    for (let ch of s) {
        if (ch === '(') {
            flag++;
            if(flag===1)continue;
        }
        if (ch === ')') {
            flag--;
            if(flag===0)continue;
        }
        stack.push(ch);
    }
    return stack.join('')
};
console.log(removeOuterParentheses("(()())(())(()(()))"))