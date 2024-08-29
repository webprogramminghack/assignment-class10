'use strict';

// start coding here

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  last() {
    return this[this.length - 1];
  }

  average() {
    const numbers = this.filter(
      (item) => typeof item === 'number' && !isNaN(item)
    );
    if (numbers.length === 0) {
      return NaN;
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
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
