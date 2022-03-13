/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
    let mapT = new Map();
    let mapSub = new Map();
    let n = s.length;
    let left = 0;
    let right = 0;
    let minLen = Number.MAX_VALUE;
    let l = -1;
    let r = -1;
    const check = function () {
        //检查滑窗中是否包含目标数组
        for ([key, value] of mapT) {
            let value2 = mapSub.get(key) === undefined ? 0 : mapSub.get(key);
            if (value > value2) {
                return false
            }
        }
        return true
    }
    for (let i = 0; i < t.length; i++) {
        mapT.set(t[i], mapT.get(t[i]) === undefined ? 1 : mapT.get(t[i]) + 1)
    }
    while (right < n) {

        if (right < n && mapT.has(s[right])) {
            mapSub.set(s[right], mapSub.get(s[right]) === undefined ? 1 : mapSub.get(s[right]) + 1)
        }
        console.log(mapSub)
        while (check() && left <= right) {

            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                l = left;
                r = right;
            }
            if (mapT.has(s[left])) {
                mapSub.set(s[left], mapSub.get(s[left]) - 1);

            }
            left++;
        }

        right++;
    }
    let ans = l === -1 ? "" : s.slice(l, r + 1)
    console.log(r)
    return ans;
};

console.log(minWindow("a", "a"))