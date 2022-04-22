function powerfulDigitSum(n) {
  //简单模拟题意，因为数据大所以采用BigInt
  let ans = 0;
  for (let a = n - 1; a > 0; a--) {
    for (let b = n - 1; b > 0; b--) {
      const sum = digitsOfSum(a, b);
      ans = Math.max(sum, ans);
    }
  }
  return ans;
}
const power = (a, b) => {
  let result = 1n;
  for (let i = 0; i < b; i++) {
    result *= BigInt(a);
  }
  return result;
}
const digitsOfSum = (a, b) => {
  let pow = power(a, b), result = 0n;
  while (pow > 0n) {
    result += pow % 10n;
    pow = pow / 10n;
  }
  return parseInt(result);
}
console.log(powerfulDigitSum(100))