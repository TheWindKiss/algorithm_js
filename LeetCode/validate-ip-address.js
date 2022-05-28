/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
    //就是单纯模拟，没啥好的想法
    let arr;
    if (queryIP.includes('.')) arr = queryIP.split('.');
    else arr = queryIP.split(':')
    switch (arr.length) {
        case 4:
            return checkIPV4(arr);
        case 8:
            return checkIPV6(arr);
        default:
            return 'Neither'
    }
};
const checkIPV4 = (ip) => {
    for (let xi of ip) {
        let num = parseInt(xi);
        if (num <= 255 && num >= 0) {
            if (String(num) !== xi) return 'Neither'
        } else return 'Neither'
    }
    return 'IPv4'
}
const checkIPV6 = (ip) => {
    const re = /^[a-fA-F0-9]{1,4}$/
    for (let xi of ip) {
        if (!re.test(xi)) return 'Neither';
    }
    return 'IPv6'
}
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))