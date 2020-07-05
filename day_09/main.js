/*
  * Largest Number
  * For n = 2, the output should be largestNumber(n) = 99
*/

function largestNumber(num) {
  const placeholder = '9'.repeat(num);
  return parseInt( placeholder );
}

const num = 3;
const result = largestNumber(num);
console.log("result: ", result);
