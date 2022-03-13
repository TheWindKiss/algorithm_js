/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    const sortArray = people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    })
    let res = [sortArray[0]];
    for (let i = 1; i < people.length; i++) {
        if (sortArray[i][1] < i) {
            let left = res.slice(0, sortArray[i][1]);
            let right = res.slice(sortArray[i][1]);
            res = left.concat([sortArray[i]]).concat(right);
        }else{
            res.push(sortArray[i])
        }
    }
    return res
};
console.log(reconstructQueue([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]))