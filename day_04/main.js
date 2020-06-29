/*
  * Array Replace
  *
  * Given an array of integers, replace all the occurences of elemToReplace with substitutionElement
  *
*/

function arrayReplace(array, elemToReplace, substitutionElement) {
  // iterate through list
  for (let i = 0; i < array.length; i++) {
    // check for matching numbers
    if (array[i] === elemToReplace) {
      // update the match 
      array[i] = substitutionElement;
    }
  }
  // return value
  return array;
}

const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElement = 3;

const result = arrayReplace(array, elemToReplace, substitutionElement);
console.log("result: ", result);
