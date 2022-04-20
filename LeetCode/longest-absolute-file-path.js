/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
    //模拟查询路径的过程，通过一个栈来保存该文件\目录之前的父目录。
    const arr = input.split('\n');
    let ans = 0, path = [];
    for (let item of arr) {
        let flag = 0;
        while (item[flag] === '\t') flag++;
        while (flag < path.length) {
            path.pop();
        }
        let len = item.length - flag + (path[path.length - 1] || 0);
        if (item.includes('.')) ans = Math.max(len, ans);
        else path.push(len + 1);
    }
    return ans;
};
console.log(lengthLongestPath('file1.txt\nfile2.txt\nlongfile.txt'))