/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
    //思路：使用bfs。找到每次变换的合法基因（合法：在bank中而且是首次访问）放到队列中进行下一次变换。直到完成变换。
    const visited = new Set(), keys = ['A', 'C', 'G', 'T'], cnt = new Set(bank);
    console.log(cnt)
    if (end === start) return 0;
    if (!cnt.has(end)) return -1;
    const queue = [start];
    let step = 1;
    while (queue.length > 0) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const cur = queue.shift();
            for (let j = 0; j < 8; j++) {
                for (let key of keys) {
                    if (key !== cur[j]) {
                        const b = [...cur];
                        b[j] = key;
                        const next = b.join('');
                        if (!visited.has(next) && cnt.has(next)) {
                            if (next === end) return step;
                            queue.push(next);
                            visited.add(next);
                        }
                    }
                }
            }
        }
        step++;
    }
    return -1;

};
console.log(minMutation("AACCTTGG",
    "AATTCCGG",
    ["AATTCCGG", "AACCTGGG", "AACCCCGG", "AACCTACC"]))