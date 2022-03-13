/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
/* var compareVersion = function (version1, version2) {
    let arr1 = version1.split(".");
    let arr2 = version2.split(".")
    let n = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < n; i++) {
        let a = Number.isNaN(Number(arr1[i])) ? 0 : Number(arr1[i]);
        let b = Number.isNaN(Number(arr2[i])) ? 0 : Number(arr2[i]);
        console.log("a:" + a + "b:" + b)
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    }
    return 0;
};
 */

var compareVersion=function(version1,version2){
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; ++i) {
        let x = 0, y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
    }
    return 0;

}
console.log(compareVersion("1.0.2", "1.0.2.1"))