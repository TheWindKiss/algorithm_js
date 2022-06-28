/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
    //思路：如果字符串本身不是另一个字符串的子串，则在它身上添加其他字符也不会是。所以找到最长的不是其他子串的那个就是。
    //设置一个判断子串的函数isSubString，对strs数组进行排序，从较长开始寻找符合的。
    strs.sort((a, b) => b.length - a.length);
    const n = strs.length;
    for (let i = 0; i < n; i++) {
        let flag = true;
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            if (isSubString(strs[i], strs[j])) {
                flag = false;
                break;
            }
        }
        if (flag) return strs[i].length;
    }
    return -1;
}
const isSubString = (str1, str2) => {
    let j = 0;
    const n = str1.length, m = str2.length;
    for (let i = 0; i < m && j < n; i++) {
        if (str1[j] === str2[i]) {
            j++;
        }
    }
    return j === n;
}
console.log(findLUSlength(["aaa", "wd", "s"]))