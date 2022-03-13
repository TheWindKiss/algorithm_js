function multiplesOf3and5(number) {
  let ans = 0, repeat = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      ans += i;
    } else if (i % 3 == 0 || i % 5 == 0) {
      ans += i;
    }
  }
  console.log(ans);
  console.log(repeat)
  ans -= repeat;
  return ans;
}

console.log(multiplesOf3and5(1000))