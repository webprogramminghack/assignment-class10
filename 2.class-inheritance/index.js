'use strict';

// start coding here
// Implement a `Person` Class
class Person {
  // Accepts `name` and `age` as parameters.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name} is ${this.age} years old`;
  }
}

// Implement an `Employee` Class that Inherits from `Person`
class Employee extends Person {
  // Accepts `name`, `age`, and `jobTitle` as parameters.
  constructor(name, age, jobTitle) {
    // Calls the parent class constructor using `super` to initialize `name` and `age` and initializes the `jobTitle` property.
    super(name, age);
    this.jobTitle = jobTitle;
  }
  getJobTitle() {
    return `Job title is ${this.jobTitle}`;
  }
}

// ---------------- don't change the code below ----------------
const person1 = new Person('Alice', 30);
console.log(person1.describe()); // Expected output: "Alice is 30 years old"

const employee1 = new Employee('Bob', 40, 'Software Engineer');
console.log(employee1.describe()); // Expected output: "Bob is 40 years old"
console.log(employee1.getJobTitle()); // Expected output: "Job title is Software Engineer"
