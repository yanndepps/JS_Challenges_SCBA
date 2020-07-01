/*
  * Case Insensitive Palindrome
  *
  * Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.
*/

function caseInsensitivePalindrome(str) {
  // make the str caseless
  const caselessStr = str.toLowerCase();
  // compare it forwards and backwards
  const reversedCaselessStr = caselessStr.split('').reverse().join('');
  // return the results
  return caselessStr === reversedCaselessStr;
}

const str1 = 'AaBaa'; // true
const str2 = 'abac'; // false
const result = caseInsensitivePalindrome(str2);
console.log("result: ", result);
