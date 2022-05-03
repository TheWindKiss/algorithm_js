/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    const strs = [], nums = [];
    for (let log of logs) {
        const idx = log.indexOf(' ');
        const flag = log.slice(idx, idx + 2);
        if (isNaN(flag)) {
            strs.push(log);
        } else {
            nums.push(log);
        }
    }
    strs.sort((a, b) => {
        const log1 = a.slice(a.indexOf(' '));
        const log2 = b.slice(b.indexOf(' '));
        if (log1 === log2) return a < b?-1:1;
        return log1.localeCompare(log2);
    });
    logs = strs.concat(nums);
    return logs;
};
console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]))