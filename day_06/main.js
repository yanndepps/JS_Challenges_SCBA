/*
  * Enclose in Brackets 
  * Given a string, enclose it in round brackets
*/

function encloseInBrackets(str) {
  // ES5
  // const solution1 = '(' + str + ')';
  // ES6
  // const solution2 = `(${str})`;
  // concat
  const solution3 = `(`.concat(str, `)`);

  return solution3;
}

const str = 'Yo';
const result = encloseInBrackets(str);
console.log("result: ", result);
