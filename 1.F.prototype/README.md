# Using Prototypes in JavaScript

## Objective

Learn how to utilize JavaScript's prototype system to share methods across instances of a constructor function. This assignment will help you understand the importance of adding methods to the prototype rather than directly to the instances.

## Instructions

### 1. Understand the Concepts

- **Constructor Function (`Book`)**: A function used to create objects. When called with the `new` keyword, it creates a new object and sets its internal `[[Prototype]]` to the constructor's `prototype` property.
- **Prototype (`Book.prototype`)**: An object that contains properties and methods shared by all instances created by the constructor function `Book`. Any method added to `Book.prototype` will be accessible by all instances created using `new Book()`.

### 2. Implement the `Book` Constructor Function

You will implement a constructor function called `Book` that:

- Accepts `title` and `author` as parameters.
- Initializes these properties on the created object.

### 3. Add a Method to `Book.prototype`

Add the following method to `Book.prototype`:

1. **`getDetails()`**
   - Returns a string summarizing the book's details, e.g., `"Title by Author"`.

### 4. Test the Constructor Function and Prototype

Test the `Book` constructor function by creating instances and calling the method defined on the prototype.

## Example Usage

```javascript
const book1 = new Book('Example Title 1', 'Example Author 1');
console.log(book1.getDetails()); // Expected output: "Example Title 1 by Example Author 1"

const book2 = new Book('Example Title 2', 'Example Author 2');
console.log(book2.getDetails()); // Expected output: "Example Title 2 by Example Author 2"
```
