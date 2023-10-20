class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getData() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

class student extends Employee {
    getStudent() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const data = new Employee("Abhi", 18);
console.log(data); // Employee { name: 'Abhi', age: 18 }
data.getData(); // Abhi is 18 years old

// because Employee class not able to get methods of student class
data.getStudent(); // TypeError: data.getStudent is not a function

const std = new student("Vivek", 20);

std.getStudent(); // Vivek is 20 years old

// because student class able to get methods of Employee class
std.getData(); // Vivek is 20 years old
