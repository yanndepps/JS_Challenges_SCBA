/*
 * Add
 * 1. write a function that returns the sum of two numbers.
 * 2. write a function that returns the sum of all numbers regardless of # of params.
 */

function add(param1, param2) {
  // code here
  return param1 + param2;
}

function addAll(...nums) {
  let sum = 0;
  nums.forEach((num) => (sum += num));
  return sum;
}

console.log(add(20, 3));
console.log(addAll(2, 3, 7));
