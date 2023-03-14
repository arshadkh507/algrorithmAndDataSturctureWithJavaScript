// ! Problem: Given an integer 'n' Find the factorial of that number
// get a number as input
//  loop for it to multiply all number less than it
// then return the result


// By For Loop 
function findFactorial (n) {
  if (n === (0 || 1)) return 1;
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
} 



 // By white Loop 
function getFactorialWhileLoop(n){
    let result = 1;
    while (n > 1) {
        result = result * n;
        n -= 1;
    }
    return result;
}

// * Big-O Time-Complexity O(n) and space-Complexity O(1) (linear and constant)
// console.log(findFactorial(0));
// console.log(findFactorial(1));
// console.log(findFactorial(5));



function recursiveFactorial (n) {
  if (n === 0) {
    return 1; 
  } else {

    return n * recursiveFactorial(n - 1);
  }
}

console.log(recursiveFactorial(5));

// console.log('factorial(' + n + ') = ' + n);
// console.log('factorial(' + n + ') = ' + n + ' * ' + 'factorial(' + (n - 1) + ')');
// recursiveFactorial(5) => 24 * 5 = 120
// recursiveFactorial(4) => 6 * 4 = 24
// recursiveFactorial(3) => 2 * 3 = 6
// recursiveFactorial(2) => 1 * 2 = 2
// recursiveFactorial(1) => 1  = 1


/*
When factorial(3) is called, the function enters the recursive case and executes num * factorial(num - 1), which becomes 3 * factorial(2).To calculate the value of factorial(2), the function enters another recursive call and executes num * factorial(num - 1), which becomes 2 * factorial(1).Finally, to calculate the value of factorial(1), the function enters a third recursive call and executes num * factorial(num - 1), which becomes 1 * factorial(0).

At this point, the base case is reached because num is equal to 0. The function logs the message "Reached base case with num = 0, returning 1", returns 1, and unwinds the call stack, returning the value of factorial(1) to factorial(2).

Now factorial(2) has the value of 2 * factorial(1), which is 2 * 1, so it logs the message "Finished executing factorial(2), returning 2" and returns 2 to factorial(3).

  Finally, factorial(3) has the value of 3 * factorial(2), which is 3 * 2, so it logs the message "Finished executing factorial(3), returning 6" and returns 6 to the calling function or the code that called factorial(3).;
  */




// Memoization algorithm: This algorithm uses memoization to store previously computed factorial values and avoid redundant calculations.
/* 
const factorialMemo = (function() {
  const memo = {};

  function factorial(n) {
    if (n === 0 || n === 1) {  // base cases
      return 1;
    }
    if (memo[n]) {  // check if value is already memoized
      return memo[n];
    } else {
      memo[n] = n * factorial(n - 1);  // memoize the value
      return memo[n];
    }
  }

  return factorial;
})();

*/