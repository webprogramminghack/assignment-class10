# Extending Built-In Classes in JavaScript

## Objective

Learn how to extend built-in JavaScript classes to create more powerful and specialized versions. This assignment will focus on extending the built-in `Array` class to create a custom `PowerArray` that includes additional functionality while maintaining the behavior of a standard array.

## Instructions

### 1. Understand the Concepts

- **Extending Built-In Classes**: JavaScript allows you to extend built-in classes like `Array`, `String`, `Number`, etc., by using the `extends` keyword. This lets you create a new class that inherits the properties and methods of the built-in class while adding new functionality or overriding existing behavior.
- **Custom Methods**: By adding custom methods to your extended class, you can enhance the functionality of the built-in class to suit specific needs.

### 2. Implement a `PowerArray` Class

You will implement a class called `PowerArray` that:

- Extends the built-in `Array` class.
- Adds a custom method `isEmpty()` that returns `true` if the array has no elements, and `false` otherwise.
- Adds a custom method `average()` that returns the average of the numerical elements in the array. If the array is empty or contains no numbers, it should return `NaN`.
- Adds a custom method `last()` that returns the last element of the array. If the array is empty, it should return `undefined`.

### 3. Utilize Inherited Array Methods

Your `PowerArray` should retain all the standard behavior of a regular `Array`. This means you should be able to use methods like `push()`, `pop()`, `map()`, `filter()`, etc., on instances of `PowerArray`.

### 4. Test the `PowerArray` Class

Test the `PowerArray` class by creating instances and calling both the inherited and custom methods.

## Example Usage

```javascript
const arr = new PowerArray(1, 2, 3, 4, 5);

console.log(arr.isEmpty()); // Expected output: false
console.log(arr.average()); // Expected output: 3
console.log(arr.last()); // Expected output: 5

arr.push(10);
console.log(arr.last()); // Expected output: 10

const emptyArr = new PowerArray();
console.log(emptyArr.isEmpty()); // Expected output: true
console.log(emptyArr.average()); // Expected output: NaN
console.log(emptyArr.last()); // Expected output: undefined
```
