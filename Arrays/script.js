// Arrays in Js

// ARRAYS
// let marks = [52, 65, 75, 84, 95];
// let heros = ["ironman", "machineman", "bionicman", "superman", "heroalom"];

// ARRAYS INDICES
// let marks = [52, 65, 75, 84, 95];
// marks[4];
// marks[2] = 80;

// LOOPING OVER ARRAYS
// let heros = ["ironman", "machineman", "bionicman", "superman", "heroalom"];
// for (let i = 0; i < heros.length; i++) {
//   console.log(heros[i]);
// }
// for (hero of heros) {
//   console.log(hero);
// }

// Qs. For a given array with marks of students->[85, 97, 44, 37, 76, 60] find the average marks of the entire class.
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let value of marks) {
//   sum += value;
// }
// let avg = sum / marks.length;
// console.log(avg);

// Qs. For a given array with prices of 5 items ->[250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);

// ARRAY METHODS
// let array = ["Shefat", "Sirajganj", "Kandapara", "Bangladesh"];
// let push = array.push("Ahmed");
// let pop = array.pop();
// let toString = array.toString();
// let morearray = ["Kandapara", "Bangladesh"];
// let morearrayint = ["Asia"];
// let concat = array.concat(morearray, morearrayint);
// let unshift = array.unshift("Md");
// let shift = array.shift();
// let slice = array.slice(1, 2);
// array.splice(1, 2, "newelement",); // startidx, deleteIdx, newelement
// console.log(array);

// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a.Remove the first company from the array
// b.Remove Uber & Add Ola in its place
// Add Amazon at the end

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//a. companies.shift();
//b. companies.splice(2,1,"Ola")
//c. companies.push("Amazon")
// console.log(companies);