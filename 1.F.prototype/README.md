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

# Menggunakan Prototipe dalam JavaScript

## Tujuan

Pelajari cara memanfaatkan sistem prototipe JavaScript untuk berbagi metode di seluruh instance fungsi konstruktor. Tugas ini akan membantu Anda memahami pentingnya menambahkan metode ke prototipe, bukan langsung ke instance.

## Petunjuk

### 1. Memahami Konsep

- **Fungsi Konstruktor (`Buku`)**: Fungsi yang digunakan untuk membuat objek. Saat dipanggil dengan kata kunci `baru`, ia akan membuat objek baru dan menyetel `[[Prototipe]]` internalnya ke properti `prototipe` konstruktor.
- **Prototipe (`Book.prototype`)**: Objek yang berisi properti dan metode yang digunakan bersama oleh semua instance yang dibuat oleh fungsi konstruktor `Book`. Metode apa pun yang ditambahkan ke `Book.prototype` akan dapat diakses oleh semua instance yang dibuat menggunakan `Buku baru()`.

### 2. Menerapkan Fungsi Konstruktor `Buku`

Anda akan mengimplementasikan fungsi konstruktor yang disebut `Book` yang:

- Menerima `judul` dan `penulis` sebagai parameter.
- Menginisialisasi properti ini pada objek yang dibuat.

### 3. Tambahkan Metode ke `Book.prototype`

Tambahkan metode berikut ke `Book.prototype`:

1. **`dapatkanDetail()`**
   - Mengembalikan string yang merangkum detail buku, misalnya, `"Judul menurut Penulis"`.

### 4. Uji Fungsi Konstruktor dan Prototipe

Uji fungsi konstruktor `Buku` dengan membuat instance dan memanggil metode yang ditentukan pada prototipe.

## Contoh Penggunaan

```javascript
const book1 = Buku baru('Contoh Judul 1', 'Contoh Penulis 1');
konsol.log(book1.getDetails()); // Output yang diharapkan: "Contoh Judul 1 dengan Contoh Penulis 1"

const book2 = Buku baru('Contoh Judul 2', 'Contoh Penulis 2');
konsol.log(book2.getDetails()); // Output yang diharapkan: "Contoh Judul 2 dengan Contoh Penulis 2"
```
