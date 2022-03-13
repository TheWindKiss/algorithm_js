/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(digits===''){
        return []
    }
    let arr = digits.split("");
    let convert = [];
    let ans = []
    let combination = "";
    let charAt = "";
    arr.forEach((item) => {
        switch (item) {
            case '2':
                convert.push(["a", "b", "c"]);
                break;
            case '3':
                convert.push(["d", "e", "f"]);
                break;
            case '4':
                convert.push(["g", "h", "i"]);
                break;
            case '5':
                convert.push(["j", "k", "l"]);
                break;
            case '6':
                convert.push(["m", "n", "o"]);
                break;
            case '7':
                convert.push(["p", "q", "r", "s"]);
                break;
            case '8':
                convert.push(["t", "u", "v"]);
                break;
            case '9':
                convert.push(["w", "x", "y", "z"]);
                break;
            default:
                return new Error("字符串格式有误");
        }
    })
    backtrack(ans, convert, 0, convert.length, combination, charAt);
    return ans;
};
function backtrack(ans, convert, index, len, combination, charAt) {
    combination += charAt;
    if (index == len) {
        ans.push(combination);
    } else {

        for (let i = 0; i < convert[index].length; i++) {
            let charAt = convert[index][i];
            backtrack(ans, convert, index + 1, len, combination, charAt)
        }
    }

}

console.log(letterCombinations("252"))