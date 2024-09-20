'use strict';

// start coding here
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
  average() {
    const numArray = this.filter(item => typeof item === 'number');
    if (numArray.length === 0) {
      return NaN;
    }
    const sum = numArray.reduce((acc, num) => acc + num, 0);
    return sum / numArray.length;
  }
  last() {
    return this.length > 0 ? this[this.length - 1] : undefined;
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
