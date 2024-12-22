// Functions in JS
// function myFunction() {
//   console.log("Hello");
//   console.log("How are you");
// }
// myFunction();
// function myFunction(msg, n) {
//   //parameter -> input
//   console.log(msg, n);
// }
// myFunction("Hello", 100); //argument
// function sum(x, y) {
//   s = x + y;
//   return s;
// }
// let val = sum(2, 4);

// Arrow function
// const arrowSum = (a, b) => {
//   console.log(a + b);
// };
// const arrowMul = (a, b) => {
//   console.log(a * b);
// };
// const printHello = () => {
//   console.log("Hello world");
// };

// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the String.
// function countVowels(str) {
//   let count = 0;
//   for (char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return(count);
// }
// countVowels("Heliualo");

// Qs. Create an arrow function to perform the same task.
// const countVowels = (str) => {
//   let count = 0;
//   for (char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// forEach loop in array
// let array = ["dhaka", "sirajganj", "bogra", "pabna"];
// array.forEach(function (val, idx, arr) {
//   console.log(val.toUpperCase(), idx, arr);
// });

// Qs. For a given array of numbers, print the square of each value using the forEach loop.
// let num = [1, 2, 3, 4, 5];
// num.forEach((num) => console.log(num * num));

// More array methods
// let nums = [67, 45, 84];
// // map
// let newArr = nums.map((val) => {
//   return val * 2;
// });
// console.log(newArr);
// // filter
// let evenArr = nums.filter((val) => {
//   return val > 50;
// });
// console.log(evenArr);
// // reduce
// const output = nums.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// });
// console.log(output);

// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90.
// let marks = [75, 65, 87, 84, 85, 95];
// let toppers = marks.filter((val) => {
//   return val > 90;
// });
// console.log(toppers);
// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// let n = prompt("Enter a number :");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);
// Use the reduce method to calculate sum of all numbers in the array.
// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(sum);
// Use the reduce method to calculate product of all numbers in the array.
// let factorial = arr.reduce((res, curr) => {
//   return res * curr;
// });
