/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
        if(numerator%denominator===0){
            return ''+Math.floor(numerator/denominator);
        }
        const result=[];
        if(numerator<0^denominator<0){
            result.push('-');
        }
        //整数部分
        numerator=Math.abs(numerator);
        denominator =Math.abs(denominator);
        const integerPart = Math.floor(numerator/denominator);
        result.push(integerPart);
        result.push('.');

        //小数部分
        const fractionPart=[];
        const remainerIndexDic=new Map;
        let reamainer=numerator%denominator;
        let index=0;
        //小数部分进行逐步计算
        while(reamainer!==0&&!remainerIndexDic.has(reamainer)){
            remainerIndexDic.set(reamainer,index);
            reamainer*=10;
            fractionPart.push(Math.floor(reamainer/denominator));
            reamainer%=denominator;
            index++;
        }
        //判断可除尽还是循环小数
        if(reamainer!==0){
            let insertIndex =remainerIndexDic.get(reamainer);
            fractionPart.splice(insertIndex,0,'(');
            fractionPart.push(')');
        }
     result.push(fractionPart.join(''));
     return result.join('')
};

console.log(fractionToDecimal(2, 3))