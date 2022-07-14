/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
    let stack = [];
  for(let a of asteroids) {
      while(stack.length && stack[stack.length - 1] !== null && stack[stack.length - 1] > 0 
      && stack[stack.length - 1] < -a) {
          stack.pop();
      }
      if(stack.length && a < 0 && stack[stack.length - 1] == -a) {
          stack.pop();
      } else if(a > 0 || !stack.length || stack[stack.length - 1] < 0) {
          stack.push(a);
      }
  }
  return stack;
};