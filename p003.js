// Prompt: Largest Prime Factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
//
// Research:
//   - Prime factors of a positive integer are the prime numbers that divide
//     that integer exactly.
//   - Can find all the prime factors of a positive integer using the
//     Sieve of Eratosthenes
//       1. Create a list of consecutive integers from 2 through n
//       2. Initially, let p equal 2, the first prime number.
//       3. Starting from p, enumerate its multiples by counting to n
//            in increments of p, and mark them in the list (2p, 3p, 4p...)
//       4. Find the first number greater than p in the list that is not marked
//            If there was no such number, stop. Otherwise, let p now equal
//            this new number (which is the next prime), and repeat from step 3.

var isPrime = function(n) {
  for (var i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

var p3 = function(n) {
  for (var i = n; i >= 2; i--) {
    if (n % i === 0 && isPrime(i)) {
      return i;
    }
  }
};

console.log(p3(600851475143));


