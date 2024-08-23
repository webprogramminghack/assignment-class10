# Understanding Class Inheritance and `super` in JavaScript

## Objective

Learn how to use JavaScript classes to create objects with shared properties and methods. This assignment will help you understand how to use inheritance to extend a base class and utilize the `super` keyword to call the parent class constructor.

## Instructions

### 1. Understand the Concepts

- **Class (`ParentClass`)**: A blueprint for creating objects. Classes encapsulate data with code to work on that data.
- **Inheritance**: A mechanism that allows a class to inherit properties and methods from another class.
- **`super` Keyword**: Used to call the constructor of the parent class and to access parent class methods.

### 2. Implement a `Person` Class

You will implement a class called `Person` that:

- Accepts `name` and `age` as parameters.
- Initializes these properties on the created object.
- Has a method `describe()` that returns a string summarizing the person's details, e.g., `"Name is Age years old"`.

### 3. Implement an `Employee` Class that Inherits from `Person`

You will implement a class called `Employee` that:

- Inherits from `Person` using the `extends` keyword.
- Accepts `name`, `age`, and `jobTitle` as parameters.
- Calls the parent class constructor using `super` to initialize `name` and `age`.
- Initializes the `jobTitle` property.
- Has a method `getJobTitle()` that returns the job title, e.g., `"Job title is JobTitle"`.

### 4. Test the Classes and Inheritance

Test the `Person` and `Employee` classes by creating instances and calling their methods.

## Example Usage

```javascript
const person1 = new Person('Alice', 30);
console.log(person1.describe()); // Expected output: "Alice is 30 years old"

const employee1 = new Employee('Bob', 40, 'Software Engineer');
console.log(employee1.describe()); // Expected output: "Bob is 40 years old"
console.log(employee1.getJobTitle()); // Expected output: "Job title is Software Engineer"
```
