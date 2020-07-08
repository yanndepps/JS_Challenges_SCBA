/*
 * Max Multiple
 * Given a divisor and a bound, find the largest integer N such that :
 * N is divisible by divisor
 * N is less than or equal to bound
 * N is greater than 0
 */

/**
 * @param {number} divisor
 * @param {number} bound
 */

function maxMultiple(divisor, bound) {
  const remainder = bound % divisor;
  // console.log(remainder);
  return bound - remainder;
}

const divisor = 3;
const bound = 10;
const result = maxMultiple(divisor, bound);

console.log('result: ', result);
