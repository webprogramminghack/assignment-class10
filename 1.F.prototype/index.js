'use strict';

// you should not put the method inside the instance, instead, you should put it in the instance's prototype.
// start coding here
function Book(title,author){
  this.title = title
  this.author = author
}
Book.prototype.getDetails = function (){
  return `${this.title} by ${this.author}`
}

// ---------------- don't change the code below ----------------
// first argument is the title of the book
// second argument is the author of the book
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
console.log(book1.getDetails()); // Expected output: "Example Title 1 by Example Author 1"

const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
console.log(book2.getDetails()); // Expected output: "Example Title 2 by Example Author 2"
