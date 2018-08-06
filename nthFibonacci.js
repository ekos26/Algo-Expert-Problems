// Nth Fibonacci
// ​
// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.
// ​
// Sample input: 6
// Sample output: 5 (0, 1, 1, 2, 3, 5)

// O(2^n) time | O(n) space
// function getNthFib(n) {
//   if (n === 2) {
//     return 1;
//   } else if (n === 1) {
//     return 0;
//   } else {
//     return getNthFib(n - 1) + getNthFib(n - 2);
//   }
// }


// O(n) time | O(n) space
// function getNthFib(n, memoize = {1: 0, 2: 1}) {
//   if (n in memoize) {
//     return memoize[n];
//   } else {
//     memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
//     return memoize[n];
//   }
// }

// O(n) time | O(1) space
function getNthFib(n) {
	if (n === 1) return 0;
	if (n === 2) return 1;
	let current;
	let prevPrev = 0;
	let prev = 1;
	for (let i = 1; i < n - 1; i++) {
		current = prev + prevPrev;
		prevPrev = prev;
		prev = current;
	}
	return current;
}
