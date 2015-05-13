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

// range() will create an array of numbers from 2 to n
var range = function(begin, end) {
  var result = [];
  for (var i = begin; i <= end; i++) {
    result.push(i);
  }
  return result;
};

// Sieve will find all prime numbers less than or equal to n
var sieve = function(n) {
  var candidates = range(2, n);
  var p = 2;
  var i = 0;
  while (i < candidates.length) {

    // possible candidates are ones that are not divisible by current p
    // (or is p itself).
    var remainingCandidates = candidates.slice(i).filter(function(num){
      return num % p !== 0 || num === p;
    });

    // concat because the previous candidates are all less than our current
    // prime value, which means they must be prime (since they weren't filtered
    // out earlier).
    candidates = candidates.slice(0, i).concat(remainingCandidates);

    // Go to our next prime number.
    p = candidates[++i];
  }
  return candidates;
};

var primeFactors = function(n) {
  var potentialPrimeFactors = sieve(n);
  var primes = [];
  while (n !== 1) {
    for (var i = 0; i < potentialPrimeFactors.length; i++) {
      var cand = potentialPrimeFactors[i];
      if (n % cand === 0) {
        primes.push(cand);
        n /= cand;
        break;
      }
    }
  }
  // Return the prime factors
  return primes;
};

var p3 = function(n) {
  var factors = primeFactors(n);
  return factors[factors.length - 1];
};

console.log(p3(600851475143));
