// problem: Given a natural number (n) determine wether it's prime number or not?

// get a number n
// check if less then 2
// return something if < 2
// otherwise whether is it divide on number up to half of the given (n)
// if it divide then it is not prime number else it is prime number


function isPrime (n) {
  if (n < 2) {
    return false;
  }
  if (n === (2 || 3)) {
    return true;
  }
  let result = 0;
  for (let i = 1; i <= (n / 2); i++) {
    if (n % i === 0) {
      result++;
    }
  }
  if (result > 2) {
    return `${ n } not a prime number`;
  }
  return `${ n } prime number`;
}
// console.log(isPrime(31));


function isPrime (n) {
  // Handle special case for n = 2
  if (n === 2) {
    return true;
  }
  // Handle cases where n is even or less than 2
  if (n < 2 || n % 2 === 0) {
    return false;
  }
  // Check if n is divisible by any odd number greater than or equal to 3 and less than or equal to its square root
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
/* 
This algorithm is similar to the previous one, but it only checks odd numbers greater than or equal to 3 as potential divisors, since even numbers are not prime (except for 2). We also handle the special case of n = 2 separately since it is the only even prime number.

The time complexity of this algorithm is also O(sqrt(n)), since we only need to check divisors up to the square root of n.

The space complexity of this algorithm is O(1) for the same reason as the previous algorithm.
*/