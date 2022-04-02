/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function (password) {
    //看官方题解:https://leetcode-cn.com/problems/strong-password-checker/solution/qiang-mi-ma-jian-yan-qi-by-leetcode-solu-4fqx/
    //分三种情况：长度小于6，6到20之间，大于20
    //前两种很好理解，小于6时，找替换和添加的操作最小值。6-20之间，找到替换条件2和条件3的最小值
    //第三种，首先明确操作为删除和替换。对于连续k个相同字符，替换的操作次数为floor(k/3)；
    //当k%3==0,删除一个字符串能减少一次替换操作
    //当k%3==1，删除两个字符串能减少一次替换操作
    //当k%3==2,删除三个字符串能减少一次替换操作
    //优先执行k%3==0时的删除操作能同时减少一次替换
    const n = password.length;
    let two = checkTwo(password);
    if (n < 6) {
        return Math.max(two, 6 - n);
    } else if (n <= 20) {
        let three = 0;
        let cur = '';
        let cnt = 0;
        for (let ch of password) {
            if (ch === cur) {
                cnt++;
            } else {
                three += Math.floor(cnt / 3);
                cur = ch;
                cnt = 1;
            }
        }
        three += Math.floor(cnt / 3);
        return Math.max(three, two);
    } else {
        let replace = 0, remove = n - 20;
        let rm2 = 0, cnt = 0, cur = '';
        for (let ch of password) {
            if (ch === cur) {
                cnt++;
            } else {
                if (remove > 0 && cnt >= 3) {
                    if (cnt % 3 === 0) {
                        replace--;
                        remove--;
                    }
                    if (cnt % 3 === 1) {
                        rm2++;
                    }
                }
                replace += Math.floor(cnt / 3);
                cnt = 1;
                cur = ch;
            }
        }
        if (remove > 0 && cnt >= 3) {
            if (cnt % 3 === 0) {
                replace--;
                remove--;
            }
            if (cnt % 3 === 1) {
                rm2++;
            }
        }
        replace += Math.floor(cnt / 3);
        const use2 = Math.min(Math.min(replace, rm2), Math.floor(remove / 2));
        replace -= use2;
        remove -= use2 * 2;
        const use3 = Math.min(replace, Math.floor(remove / 3));
        replace -= use3;
        remove -= use3 * 3;
        return n - 20 + Math.max(replace, two);
    }
};
const checkTwo = (password) => {
    let cnt = 0;
    if (!/[a-z]+/.test(password)) cnt++;
    if (!/[A-Z]+/.test(password)) cnt++;
    if (!/\d+/.test(password)) cnt++;
    return cnt;
}
console.log(strongPasswordChecker("aaa111"))