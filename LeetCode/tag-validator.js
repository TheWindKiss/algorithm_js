/**
 * @param {string} code
 * @return {boolean}
 */
const TAG_NAME = /^<([A-Z]{1,9}>[\s\S]*<\/1>$)>/;
var isValid = function (code) {
    //正则匹配的想法确实机智。
    //答案来源：https://leetcode-cn.com/problems/tag-validator/solution/10xing-dai-ma-wan-cheng-by-jie-ma-13r8/
    if (!TAG_NAME.test(code)) return false;
    //将CDATA的值都消掉
    code = code.replace(/<!\[CDATA\[[\s\S]*?]]>/g, '*');
    const tagReg = /<([A-Z]{1,9})>[^<]*<\/\1>/g;
    while (code && tagReg.test(code)) {
        code = code.replace(tagReg, '*');
    }
    return code==='*'
};