// Comments in JS =>
// console.log("Hello World!")
/* This is a code that prints
hello world on our console window */

// Operators in JS =>
// Arithmetic Operators
// let a=7;
// let b=5;
// console.log("a + b =>",a+b)
// console.log("a - b =>",a-b)
// console.log("a * b =>",a*b)
// console.log("a/b =>",a/b)
// console.log("a%b =>",a%b) //modulus operators
// console.log("a**b =>",a**b) //a^b exponentiation operators

// Unary Operator
// let a = 7;
// let b = 5;
// console.log("a=>", a, "b=>", b);
// a++;  //increment
// b--;  //decrement

// Assignment Operators
// let a = 7;
// let b = 5;
// a += 4; // a = a + 4
// a -= 4; // a = a - 4
// a *= 4; // a = a * 4
// a /= 4; // a = a / 4
// a %= 4; // a = a % 4
// a **= 4; // a = a ** 4
// console.log(a);

// Comparison Operators
// let a = 7;
// let b = 5;
// console.log("a == b", a == b); // equal to
// console.log("a != b", a != b); // not equal to
// console.log("a === b", a === b); // equal to
// console.log("a !== b", a !== b); // not equal to & type
// console.log("a > b", a > b);
// console.log("a < b", a < b);
// console.log("a <= b", a <= b);
// console.log("a >= b", a >= b);

// Logical Operators
// let a = 7;
// let b = 5;
// console.log("cond1 && cond2 =>", a > b && a === 7);
// console.log("cond1 || cond2 =>", a > b || a === 8);
// console.log(" !(7 < 5) =>", !(a < b));

// Conditional Statements
// if
// let age = 25;
// if (age >= 18) {
//   console.log("you can vote");
// }
// if (age < 18) {
//   console.log("you cannot vote");
// }
// let mode = "dark";
// let color;
// if (mode === "dark") {
//   color = "black";
// }
// if (mode === "light") {
//   color = "white";
// }
// console.log(color);
// if else
// let age = 19;
// if (age >= 18) {
//   console.log("vote");
// } else {
//   console.log("not vote");
// }
// let num = 18;
// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }
// let mode = "yeallow";
// let color;
// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "red") {
//   color = "red";
// } else {
//   color = "white";
// }
// console.log(color);
// ternary operator
// let age = 12;
// let result = age >= 18 ? "adult" : "not adult"; // simpler, compact if-else
// console.log(result);
//switch case
// let fruits = "pepe";
// switch (fruits) {
//   case "mango":
//     console.log("mango");
//     break;
//   case "coconut":
//     console.log("coconut");
//     break;
//   default:
//     console.log("jackfruit");
// }

// practice problem
// Qs1. Get user to input a number using prompt("Enter a number"). Check if the number is a multiple of 5 or not.
// prompt
// let user = prompt("Enter a number:");
// if (user % 5 === 0) {
//   console.log("num is multiple of 5");
// } else {
//   console.log("num is not multiple of 5");
// }
// Qs2. Write a code which can give grades to students according to their scores?
// let scores = prompt("Enter your number");
// let result;
// if (scores >= 80 && scores <= 100) {
//   result = "A";
// } else if (scores >= 70 && scores <= 79) {
//   result = "B";
// } else if (scores >= 60 && scores <= 69) {
//   result = "C";
// } else if (scores >= 50 && scores <= 59) {
//   result = "D";
// } else if (scores >= 0 && scores <= 49) {
//   result = "F";
// }
// console.log(result);