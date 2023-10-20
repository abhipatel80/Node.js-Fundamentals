// -----------------------------------Arithmetic Operators-----------------------------------
console.log(20 + 30); // 50
console.log(30 - 20); // 10
console.log(2 * 4); // 8
console.log(30 / 2); // 15
console.log(30 % 4); // 2
console.log(2 ** 4); // 16

// -----------------------------------Logical Operators-----------------------------------
// if both values are match the given condition than only its give output
let age = 20;
if (age >= 20 && age <= 10) {
    console.log("age", age);
}

// if one value match the given condition from both values than its give output
let num = 20;
if (num >= 20 || num <= 10) {
    console.log("age", num);
}

// Not operator
const c = true;
console.log(!c); // false 

// -----------------------------------Assignment Operators-----------------------------------
// its use to assign value to variable
let x = 10;

// short form to write => x = x + 8; 
console.log(x += 8);
console.log(x -= 8);

// -----------------------------------Comparison Operators-----------------------------------

let a = 5;
let b = "5";

console.log(a == b); // true
console.log(a === b); // false
console.log(a != b); // false
console.log(a !== b); // true
console.log(a < b); // false
console.log(a <= b); // true
console.log(a > b); // false
console.log(a >= b); // true

// -----------------------------------Ternary Operators-----------------------------------
// short form of if-else
let number = 20;
let check = number >= 18 ? "Yes" : "No";
console.log(check);

// -----------------------------------Typeof Operators-----------------------------------
console.log(typeof "hello");
console.log(typeof 20);
