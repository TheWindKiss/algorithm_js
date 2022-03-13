/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
     if(numRows<2){
         return s;
     }
    let arr=Array(numRows).fill("")
    let i=0;
    let flag=-1;
    for(char of s){
        arr[i]+=char;
        if(i===0||i===numRows-1){
            //当遍历到数组边界的时候进行标志转换，移动方向向下+1，向上-1，
            flag=-flag
        }
        i+=flag;
    }
    return arr.join("")
};

console.log(convert("PAYPALISHIRING",4))