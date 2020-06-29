/*
  * All Longest Strings
  * Given an array of strings, return another array containing
  * all of its longest strings.
*/

function allLongestStrings(array) {
  // find the longest length
  const longestWords = [];
  let longestLength = 0;

  for (let word of array) {
    longestLength = word.length > longestLength ? word.length : longestLength;
  }

  for (let word of array) {
    if(longestLength === word.length) {
      longestWords.push(word);
    }
  }
  // return the longest strings
  // return longestLength;
  return longestWords;
}

const strings = ["abacd", "aa", "ad", "vcd", "aba", "a"];
const result = allLongestStrings(strings);
console.log("result: ", result);
