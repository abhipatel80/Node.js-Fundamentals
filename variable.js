// we can declare variable in javascript by var, let and const

// -------------------------variable declare with var-------------------------
// variable declare with var has global scope and we can assign new value to it 
// we can declare variable with same name also.
var a = 20;
var a = 40;
console.log(a);

// ********************************let and const are introduced in ES6********************************

// -------------------------variable declare with let-------------------------
// variable declare with let has local scope and we can assign new value to it 
// we can not declare variable with same name.

let b = 20;
b = 40; // It's work
let b = 20; // SyntaxError: Identifier 'b' has already been declared
console.log(b);

// -------------------------variable declare with const-------------------------
// variable declare with const has local scope and we can not assign new value to it 
// we can not declare variable with same name.

const c = 20;
c = 40; // TypeError: Assignment to constant variable.
const c = 20; // SyntaxError: Identifier 'c' has already been declared
console.log(b);
