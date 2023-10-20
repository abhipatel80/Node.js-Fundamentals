// -------------------------------simple function-------------------------------
// in javascript simple functions are hoisted so, function declaration moved to the top of their scope before code exeution

sum(10, 8); // 18

function sum(a, b) {
    console.log(a + b);
}

sum(10, 8); // 18

// -------------------------------arrow function-------------------------------
// its introduced in ES6
// arrow function are not hoisted in javascript

// multiply(10, 2); // ReferenceError: Cannot access 'multiply' before initialization

const multiply = (a, b) => {
    console.log(a * b);
}

multiply(10, 2); // 20

// -------------------------------functions with default arguments-------------------------------
const minus = (a, b = 8) => {
    console.log(a - b);
}

minus(20); // 12
minus(20, 10); // 10

// -------------------------------IIFE function-------------------------------
// Immediately invoked function expression is execute directly. so, we don't need to call function like arrow function or simple function

(function division(a, b) {
    console.log(a / b);
})(10, 2) // 5
