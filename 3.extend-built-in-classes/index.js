'use strict';

// start coding here
// Extends the built-in `Array` class
class PowerArray extends Array {
  // Adds a custom method `isEmpty()` that returns `true` if the array has no elements, and `false` otherwise
  isEmpty() {
    return this.length === 0;
  }
  // Adds a custom method `average()` that returns the average of the numerical elements in the array. If the array is empty or contains no numbers, it should return `NaN`.
  average() {
    // Filter out non-numerical values and compute the sum
    const elements = this.filter((item) => Number.isFinite(item));

    if (elements.length === 0) return NaN; // Return NaN if no numeric elements

    const sum = elements.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum / elements.length; // Return average
  }
  // Adds a custom method `last()` that returns the last element of the array. If the array is empty, it should return `undefined`.
  last() {
    return this.length > 0 ? this[this.length - 1] : undefined; // Return undefined if the array is empty
  }
}

// ---------------- don't change the code below ----------------
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
