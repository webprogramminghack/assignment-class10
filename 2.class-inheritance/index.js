'use strict';

// start coding here
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
  getJobTitle() {;
    return `Job title is ${this.jobTitle}`;
  }
}

// ---------------- don't change the code below ----------------
const person1 = new Person('Alice', 30);
console.log(person1.describe()); // Expected output: "Alice is 30 years old"

const employee1 = new Employee('Bob', 40, 'Software Engineer');
console.log(employee1.describe()); // Expected output: "Bob is 40 years old"
console.log(employee1.getJobTitle()); // Expected output: "Job title is Software Engineer"
