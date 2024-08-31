'use strict';

// start coding here
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  average() {
    if (this.isEmpty()) return NaN;
    const sum = this.reduce((acc, val) => typeof val === 'number' ? acc + val : acc, 0);
    const count = this.filter(val => typeof val === 'number').length;
    return count > 0 ? sum / count : NaN;
  }

  last() {
    return this.isEmpty() ? undefined : this[this.length - 1];
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
