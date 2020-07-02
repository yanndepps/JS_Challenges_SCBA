/*
  * Number Factorial
  * Return the factorial of the provided integer.
  * If the ingeger is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
  * Factorials are often represented with the shorthand notation n.
  * 5! = 1*2*3*4*5 = 120
*/

function factorialNumber(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

const num = 5;
const result = factorialNumber(num);
console.log("resutl: ", result);
