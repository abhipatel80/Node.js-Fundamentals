// ---------------------------Conditional Statements---------------------------
let a = 18;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
} else if (a == b) {
    console.log("a is equal to b");
} else {
    console.log("a is less than b");
}

// ---------------------------Switch Statements---------------------------
let data = "abhi"

switch (data) {
    case "abhi":
        console.log("Welcome abhi");
        break;
    case "vivek":
        console.log("Welcome vivek");
        break;
    default:
        console.log("Welcome user");
}

// ---------------------------Loops---------------------------
// for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const arr = [10, 20, 30, 40];

// for...in loop
// for...in loop iterate keys of arr or object
for (value in arr) {
    console.log(value);
    console.log(arr[value]);
}

// for...of loop
// for...of loop iterate values of arr or object
for (value of arr) {
    console.log(value);
}

// forEach loop
arr.forEach(value => {
    console.log(value);
});

// while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// do...while loop
// do while loop always run one time if condition is becomes false
do {
    console.log(i);
    i++;
} while (i <= 10);
