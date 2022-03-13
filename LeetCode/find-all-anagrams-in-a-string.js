/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const n = s.length, m = p.length;
    let res = [];
    if (n < m) return res;
    const pCnt = new Array(26).fill(0);
    const sCnt = new Array(26).fill(0);
    const codeA = 'a'.charCodeAt();
    for (let i = 0; i < m; i++) {
        pCnt[p.charAt(i).charCodeAt() - codeA]++;
        sCnt[s.charAt(i).charCodeAt() - codeA]++;
    }
    console.log(pCnt);
    console.log(sCnt)
    if (JSON.stringify(pCnt) === JSON.stringify(sCnt)) {

        res.push(0);
    }
    for (let i = m; i < n; i++) {
        sCnt[s.charAt(i - m).charCodeAt() - codeA]--;
        sCnt[s.charAt(i).charCodeAt() - codeA]++;

        if (JSON.stringify(pCnt) === JSON.stringify(sCnt)) {
            res.push(i - m + 1);
        }
    }
    return res;
};

console.log(findAnagrams("bpaa",
    "aa"))