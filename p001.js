// Prompt: Multiples of 3 and 5
// If we list all of the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6, 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

var p1 = function(n) {
  // initialize sum to 0
  // iterate from 1 to n - 1
  //   if i is a multiple of 3 or 5
  //     add to sum
  // return sum

  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

// Solve prompt
console.log(p1(1000));
