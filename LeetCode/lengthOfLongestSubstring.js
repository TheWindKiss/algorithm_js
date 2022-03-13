/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    //优化版滑动窗口
    if (s.length == 1) {
        return 1
    }
    let lk = 0;
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], lk) < i) {
            //获取下一个左窗口指针
            lk = s.indexOf(s[i], lk) + 1;
        } else {
            //比较这次的窗口长度是否大于上一次
            ans = Math.max(ans, i - lk + 1);
        }

    }
    return ans;

};
console.log(lengthOfLongestSubstring("pwwkew"));


/**滑动窗口
 *     if(s.length==1){
        return 1
    }
    if (s.length == 1) {
        return 1
    }
    const occ = new Set();
    let rk = -1;
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (i !== 0) {
            occ.delete(s[i - 1]);
        }
        while (rk + 1 < s.length && !occ.has(s[rk + 1])) {
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
 */


/**暴力穷举
 *   if(s.length==1){
        return 1
    }
    const arr = s.split("");
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        const subArr = arr.slice(i)
        let max = []
        max.push(subArr[0]);
        for (let j = 1; j < subArr.length; j++) {
            if (max.includes(subArr[j])) {
                if (max.length > result) {
                    result = max.length
                }
                break;
            }
            max.push(subArr[j])
             if(j==subArr.length-1&&result<max.length){
                result = max.length
            }
        }
    }
    return result;
 */