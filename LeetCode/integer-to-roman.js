/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let replace = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let res = "";
    for(let i = 0;i < values.length;i++){
        while(num >= values[i]){
            num -= values[i];
            res += replace[i];                  
        } 
    }
    return res;
};