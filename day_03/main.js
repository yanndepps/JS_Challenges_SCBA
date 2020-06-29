/*
  * Alternating Sums
  * Several people are standing in a row and need to be divided into two teams.
  * The first person goes into team one, the second into team two, the third
  * goes into team one again, the fourth into team 2, and so on.
  *
  * You're given an array of positive integers - the weight of the people.
  * Return an array of two integers, where the first element is the total weight 
  * of team 1, and the second element is the total weight of team 2 after the division is complete.
*/ 

// return alternating sums of even and odd

function alternatingSums(array) {
  // two vars : one to sort the even, one to sort the odd
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    // check if current value is even or odd
    if (i % 2 === 0) {
      // if even, add the value
      evenSum += array[i];
    } else {
      // it is odd, add the value
      oddSum += array[i];
    }
  }

  return [evenSum, oddSum];
}




const nums = [50, 60, 60, 45, 70];
const result = alternatingSums(nums);
console.log("result : ", result);
