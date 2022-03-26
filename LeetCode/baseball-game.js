/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let stack = [];
    //用swtich比if快
    for (let op of ops) {
        switch (op) {
            case '+':
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                break;
            case 'D':
                stack.push(stack[stack.length - 1] * 2);
                break;
            case "C":
                stack.pop();
                break;
            default:
                stack.push(parseInt(op));
                break;

        }
    }
    return stack.reduce((pre, cur) => pre + cur, 0);
};
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))