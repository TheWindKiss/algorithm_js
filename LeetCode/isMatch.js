/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let sLen = s.length;
    let pLen = p.length;
	let memory = Array(sLen+1).fill(false).map(x=>Array(pLen+1).fill(false))
	memory[0][0] = true;
		for(let i = 0; i <= sLen; i++) {
			for(let j = 1; j <= pLen; j++) {
				if(p.charAt(j-1) == '*') {
					//判断字符为*的情况,分为两种：
					//1.在"*"之前两位的正则已经匹配上了，直接返回true
					//2.之前的没有匹配上，当"*"之前一位匹配上了（字符匹配或者为"."）并且正则的前继都匹配返回true，
					memory[i][j] = memory[i][j-2] || (i > 0 && (s.charAt(i-1) == p.charAt(j-2) || 
							p.charAt(j-2) == '.') && memory[i-1][j]);
				}else {
					//判断，当下标p[j-1]不为"*"时，p[j-1]是否与s[i-1]相同或者为"."。同时需要满足前继匹配正则。
					memory[i][j] = i > 0 && (s.charAt(i-1) == p.charAt(j-1) || p.charAt(j-1) == '.')
									&& memory[i-1][j-1];
				}
			}
		}
		return memory[sLen][pLen];
}
console.log(isMatch("aaa","ab*"))