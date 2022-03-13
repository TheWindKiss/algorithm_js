/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const len = s.length;
    if (len % 2 === 1) {
        return false;
    }
    const stack = [];
    const map={
        "(":")",
        "[":"]",
        "{":"}",
    }
    for(const char of s){
        if(char in map){
            stack.push(char);
            continue;
        }
        console.log(stack)
        if(map[stack.pop()]!==char){
            return false;
        }
    }
    return stack.length === 0
}
console.log(isValid("{()}"))