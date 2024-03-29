/**
 * @param {number[]} nums
 * @return {number}
 */

/*  答案是使用位运算。对于这道题，可使用异或运算 oplus⊕。异或运算有以下三个性质。

 任何数和 00 做异或运算，结果仍然是原来的数，即 a oplus 0=aa⊕0=a。
 任何数和其自身做异或运算，结果是 00，即 a oplus a=0a⊕a=0。
 异或运算满足交换律和结合律，即 a oplus b oplus a=b oplus a oplus a=b oplus (a oplus a)=b oplus0=ba⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。 */
 
 var singleNumber = function(nums) {
     let ans=0;
     //
    for(const num of nums){
        ans^=num;
    }
    return ans
};
console.log(singleNumber([2,2,1]))