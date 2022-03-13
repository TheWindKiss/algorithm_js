/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    const map = new Map();
    tasks.forEach((task) => {
        map.set(task, map.get(task) === undefined ? 1 : map.get(task) + 1);
    })
    let arr = Array.from(map).sort((a, b) => a[1] - b[1]);
    let count = 1;
    let i = arr.length - 1;
    console.log(arr)
    while (i > 0 && arr[i][1] == arr[i - 1][1]) {
        count++;
        i--;
    }
    return Math.max((arr[arr.length - 1][1] - 1) * (n + 1) + count, tasks.length);

};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2))