// JavaScript is a scripting language used to develop web pages. JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page

// JavaScript is also used to make web pages more responsive and user-friendly

// ----------------------------------Variables----------------------------------
var x = true;
let y = 5;
const z = "Hello";

// ----------------------------------Data Types----------------------------------
// Javascript is dynamically-typed language, so you don't need to specify the type of a variable explicitly.
// Primitive data types
// number
let num = 10;

// string
let str = "Abhi";

// null
let data = null;

// undefined
let a = undefined;
let b;

// boolean
let bool = true;

// non-primitive data types
// object
const person = { name: "Abhi", age: 20 };

// ----------------------------------Operators----------------------------------
// arithmetic operators
console.log(20 + 10);
console.log(20 - 10);
console.log(20 * 2);
console.log(20 / 2);

// logical operators
console.log(10 && true);
console.log(10 || true);
console.log(!true);

// comparison operators
console.log(10 == 10);
console.log(10 === '10');
console.log(10 > 8);
console.log(10 < 8);

// ----------------------------------Conditional Statements----------------------------------
let number = 8;
if (number > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is less than 10");
}

// ----------------------------------Loops----------------------------------
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ----------------------------------Functions----------------------------------
const greet = (name) => {
    console.log(name);
};

greet("Abhi");

// ----------------------------------Array----------------------------------
let colors = ["red", "green", "blue"];

// ----------------------------------Objects----------------------------------
let obj = {
    name: "Abhi",
    age: 20
};

