'use strict';

// start coding here

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
