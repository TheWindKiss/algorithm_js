const codeA = 'a'.charCodeAt();
function namesScores(arr) {
    let score = 0;
    //为了减少内存没有创建副本，最好创建副本，使用副本进行计算这样无副作用
    arr.sort()
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        score += calWorth(arr[i]) * (i + 1);
    }
    return score;
}
const calWorth = (str) => {
    let worth = 0;
    for (let ch of str) {
        worth += (ch.toLowerCase().charCodeAt() - codeA + 1);
    }
    return worth
}
// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(namesScores(test2))