var plusOne = function (digits) {
/*     const plus = (digits, index) => {
        const last = digits[index] + 1;
        if (index == 0) {
            if (last == 10) {
                digits[index] = 0;
                digits.unshift(1);
            } else {
                digits[index] = last;
            }
        } else {
            if (last == 10) {
                digits[index] = 0;
                plus(digits, index - 1);
            } else {
                digits[index] = last;
            }
        }

    }
    plus(digits, digits.length - 1)
    return digits; */
    let len = digits.length;
    for(let i = len - 1; 0 <= i; i --){
      if(digits[i] != 9){
      digits[i]++;
      return digits;
    };
    digits[i] = 0;
    }
     digits.unshift(1)
    return digits;
};

console.log(plusOne([9]))