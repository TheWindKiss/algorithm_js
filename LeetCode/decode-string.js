/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    /*     const stack = [];
        let num = '';
        for (let i = 0; i < s.length; i++) {
            const code = s[i].charCodeAt()
            if (code > 47 && code < 58) {
                num += s[i];
            } else if (s[i] !== ']') {
                if (num != '') {
                    stack.push(+num)
                    num = '';
                }
                stack.push(s[i])
            } else {
                let str = '';
                let x = ''
                while (x != '[') {
                    str += x.split('').reverse().join('');
                    x = stack.pop();
                }
                x = stack.pop()
                str = str.split('').reverse().join('').repeat(x);
                console.log(str)
                stack.push(str);
            }
        }
        return stack.join(''); */
    let num = [], chara = [], re = [], c = ''
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i]) >= 0) {
            c = c + s[i]
            if (isNaN(s[i + 1])) {
                num.push(Number(c))
                c = ''
            }
        } else if (s[i] === '[') {
            chara.push([])
        } else if (s[i] === ']') {
            let str = chara.pop().join(''), n = num.pop()
            // console.log(str,n)
            if (chara.length === 0) {
                str = str.repeat(n)
                re.push(str)
            } else {
                for (let i = 0; i < n; i++) {
                    chara[chara.length - 1].push(str)
                }
            }

        } else {
            if (num.length === 0) { re.push(s[i]) }
            else { chara[chara.length - 1].push(s[i]) }
        }
    }
    return re.join('')
};
console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"
))