// fibonacci sequence 0,1,1,2,3,5,8,13,21,34....

// first i will take input
// function fibonacciSequence(parameter) function with one parameter
// then i will make an empty array
// then i will make for loop through the n
// if n = 0 or 1 ==> n
// else ==> i = 1 if n = 2 and then

/*
function findFibonacciNumber (n) {
  if (n <= 1) return n;
  let fib = [ 0, 1 ];
  for (let i = 2; i <= n; i++) {
    fib[ i ] = fib[ i - 1 ] + fib[ i - 2 ];
  }
  return fib;
}
* time complexity O(n)
console.log(findFibonacciNumber(2));
console.log(findFibonacciNumber(5)); 
*/



function findFibonacci (n) {
  if (n <= 1) return n;
  let firstPrevious = 0;
  let secondPrevious = 1;
  let fibonacciNumber = 0;
  for (let i = 2; i <= n; i++) {
    fibonacciNumber = firstPrevious + secondPrevious;
    firstPrevious = secondPrevious;
    secondPrevious = currentNum;
  }
  return fibonacciNumber;
}
console.log(findFibonacci(5));
console.log(findFibonacci(20));
// *  time complexity O(n)



/* 

! Matrix Exponentiation Algorithm:
This is an even more efficient algorithm for calculating Fibonacci numbers.It has a logarithmic time complexity of O(log(n)).


function fibonacci (n):
  if n == 0:
return 0
    elif n == 1:
return 1
    else:
F = [ [ 1, 1 ], [ 1, 0 ] ];
power(F, n - 1);
return F[ 0 ][ 0 ]

def power(F, n):
if n == 0 or n == 1:
return;
M = [ [ 1, 1 ], [ 1, 0 ] ];
power(F, n // 2)
    multiply(F, F)
    if n % 2 != 0:
  multiply(F, M)

def multiply(F, M):
x = F[ 0 ][ 0 ] * M[ 0 ][ 0 ] + F[ 0 ][ 1 ] * M[ 1 ][ 0 ];
y = F[ 0 ][ 0 ] * M[ 0 ][ 1 ] + F[ 0 ][ 1 ] * M[ 1 ][ 1 ];
z = F[ 1 ][ 0 ] * M[ 0 ][ 0 ] + F[ 1 ][ 1 ] * M[ 1 ][ 0 ];
w = F[ 1 ][ 0 ] * M[ 0 ][ 1 ] + F[ 1 ][ 1 ] * M[ 1 ][ 1 ];
F[ 0 ][ 0 ] = x;
F[ 0 ][ 1 ] = y;
F[ 1 ][ 0 ] = z;
F[ 1 ][ 1 ] = w


nitialize a 2x2 matrix F with the values[ [ 1, 1 ], [ 1, 0 ] ], where F is the matrix that will be exponentiated to find the n - th Fibonacci number.

Check if n is equal to 0 or 1. If n is 0, return 0. If n is 1, return 1.

If n is greater than 1, call the power() function with arguments F and n - 1. This function will compute F ^ (n - 1) using matrix exponentiation.

After calling the power() function, the value of F will be equal to F ^ (n - 1).

Return the value of F[ 0 ][ 0 ], which is the n - th Fibonacci number.

The power() function uses a recursive approach to compute F ^ (n - 1) using matrix exponentiation.Here are the steps of the power() function:

  Check if n is equal to 0 or 1. If n is 0, return.If n is 1, return.

Call the power() function recursively with arguments F and n; // 2. This will compute F^(n//2) using matrix exponentiation.

Multiply F by itself to obtain F ^ 2.

If n is odd(i.e., n % 2 != 0), multiply F by the matrix M = [ [ 1, 1 ], [ 1, 0 ] ] to obtain F ^ (n - 1).

After the recursive calls have finished, F will be equal to F ^ (n - 1).

The multiply() function is used by the power() function to compute the product of two matrices.It takes two 2x2 matrices F and M as inputs and returns their product.The product of two matrices is computed by multiplying the corresponding entries and summing the results.

  Overall, the Matrix Exponentiation Algorithm uses matrix multiplication to efficiently compute the n - th Fibonacci number in O(log(n)) time, which is much faster than the naive recursive algorithm.

 */



/* 
! Space complexity of fibonacci numbers



Sure, here's how you can find the space complexity of the three implementations for the Fibonacci sequence:

Recursive Algorithm:
The space complexity of the recursive algorithm is O(n), where n is the input parameter to the function. This is because the function calls itself recursively n times, each time using additional memory on the stack to store the function call, until it reaches the base case.Therefore, the space required by the algorithm is proportional to the depth of the recursive call stack, which is O(n).

Iterative Algorithm:
The space complexity of the iterative algorithm is O(1), which is constant space.This is because the algorithm only uses a fixed amount of memory to store the two previous Fibonacci numbers and the current Fibonacci number in each iteration of the loop.Therefore, the space required by the algorithm does not depend on the input size.

Matrix Exponentiation Algorithm:
The space complexity of the matrix exponentiation algorithm is O(log(n)), where n is the input parameter to the function. This is because the algorithm uses matrix multiplication to compute the n - th Fibonacci number, and the size of the matrix depends on the input parameter.Specifically, the size of the matrix is 2x2, so the space required to store the matrix is constant.However, the algorithm uses matrix exponentiation to compute the n - th Fibonacci number, and this requires recursive calls to compute powers of the matrix.The number of recursive calls is proportional to the logarithm of n(i.e., the number of times n can be divided by 2 before reaching 1).Therefore, the space required by the algorithm is proportional to the depth of the recursive call stack, which is O(log(n)).


 */

/* 
! is space complexity impotant to learn and find

Yes, understanding space complexity is important when working with the Fibonacci sequence, especially if you are working with very large numbers.

The Fibonacci sequence is known for growing very quickly, so as you calculate larger and larger numbers in the sequence, the amount of memory required to store the numbers also grows rapidly. This means that if you are not careful with your implementation, you could quickly run into memory issues.

For example, if you are calculating the nth number in the Fibonacci sequence using a recursive function, each recursive call will add another layer to the call stack, and this can quickly become very memory-intensive for large values of n.

By understanding space complexity, you can identify potential memory issues in your code and optimize it to minimize the amount of memory required. This can help ensure that your code runs efficiently and avoids memory-related errors.

*/
