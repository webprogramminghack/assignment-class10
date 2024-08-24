'use strict';

// Define the PowerArray class extending the built-in Array
class PowerArray extends Array {
  // Method to check if the array is empty
  isEmpty() {
    return this.length === 0;
  }

  // Method to calculate the average of numerical elements
  average() {
    if (this.length === 0) return NaN;

    const numbers = this.filter((item) => typeof item === 'number');
    if (numbers.length === 0) return NaN;

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }

  // Method to get the last element of the array
  last() {
    return this.length > 0 ? this[this.length - 1] : undefined;
  }
}

// Test PowerArray class
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
