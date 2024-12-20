// for Loop
// for (let count = 0; count <= 5; count++) {
//   console.log("object"); // 5 excute
// }

// calculate sum of 1 to 5
// let sum = 0;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// While loop
// let i = 0;
// while (i <= 5) {
//   console.log("object");
//   i++;
// }

// do-while Loop
// let i = 60;
// do {
//   console.log("object");
//   i++;
// } while (i <= 5);

// for of loop
// let str = "object";
// for (let val of str) {
//   console.log(val);
// }
// let str = "object";
// let length = 0;
// for (let val of str) {
//   console.log(val);
//   length++;
// }
// console.log(length);

// for - in Loop
// let student = {
//   name: "Shefat",
//   age: 24,
//   isMarried: false,
//   cgp: 5.0,
// };
// for (let key in student) {
//   console.log("Key: ", key, "Value: ", student[key]);
// }

// Qs1: Print all even numbers from 0 to 100
// for (let num = 0; num <= 100; num++) {
//   if (num % 2 == 0) {
//     console.log(num);
//   }
// }

// QS2: Create a game where you start with any random game number. Ask the user to keep guessing then game number until the user enters correct value.
// let gameNumber = 25;
// let userNum = prompt("Guess the game number");
// while (userNum != gameNumber) {
//  userNum = prompt("You enter a wrong number. Guess the game number");
// }
// console.log("Congratulations, you enter correct number.");

// Strings in JS
// let str = "shefat";
// console.log(str[3]);

// Template Literals
// let specialString = `This is template literal`;
// console.log(typeof specialString);

// let obj = {
//   product: "pen",
//   price: 25,
// };
// let result = `This item price is ${obj.price} taka`;
// console.log(result);
// console.log("Shefat\nAhmed");
// console.log("Shefat\tAhmed");

// String Methods in JS
// let str = "Shefat Ahmed";
// let str2 = "From Sirajganj";
// let newStrUpp = str.toUpperCase();
// let newStrLow = str.toLowerCase();
// let newStrtrim = str.trim();
// let newStrSlice = str.slice(2, 4); // returns part of string
// let newStrConcat = str.concat(str2); // join str with str2
// let newStrReplace = str.replace("Shefat", "Ahmed");
// // let newStrReplaceAll = str.replaceAll("Shefat", "Ahmed");
// let newStrCharAt = str.charAt(2);
// console.log(newStrReplace);

// Qs1: Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length
// let fullName = prompt("Enter your full name");
// let userName = `@${fullName}${fullName.length}`;
// console.log(userName);