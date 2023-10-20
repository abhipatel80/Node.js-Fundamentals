const obj = {
    name: 'Abhi',
    age: 20
}

console.log(obj); // { name: 'Abhi', age: 20 }
console.log(obj.name); // Abhi
console.log(obj['age']); // 20

// add new value in object
obj.gender = "Male"
console.log(obj); // { name: 'Abhi', age: 20, gender: 'Male' }

// edit value in object
obj.age = 24;
console.log(obj.age); // 24

// delete value in object
delete obj.name;
console.log(obj); // { age: 20, gender: 'Male' }


const person = {
    name: "Abhi",
    age: 18,
    isStudent: true
};

// we can use for...in loop on object
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// get array of keys of object
const keys = Object.keys(person);
console.log(keys);

// get array of values of object
const values = Object.values(person);
console.log(values);

// convert object into 2D array
const entries = Object.entries(person);
console.log(entries);
