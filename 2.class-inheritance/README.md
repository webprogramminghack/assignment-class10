# Understanding Class Inheritance and `super` in JavaScript

## Objective

Learn how to use JavaScript classes to create objects with shared properties and methods. This assignment will help you understand how to use inheritance to extend a base class and utilize the `super` keyword to call the parent class constructor.

## Instructions

### 1. Understand the Concepts

- **Class (`ParentClass`)**: A blueprint for creating objects. Classes encapsulate data with code to work on that data.
- **Inheritance**: A mechanism that allows a class to inherit properties and methods from another class.
- **`super` Keyword**: Used to call the constructor of the parent class and to access parent class methods.

### 2. Implement a `Person` Class

You will implement a class called `Person` that:

- Accepts `name` and `age` as parameters.
- Initializes these properties on the created object.
- Has a method `describe()` that returns a string summarizing the person's details, e.g., `"Name is Age years old"`.

### 3. Implement an `Employee` Class that Inherits from `Person`

You will implement a class called `Employee` that:

- Inherits from `Person` using the `extends` keyword.
- Accepts `name`, `age`, and `jobTitle` as parameters.
- Calls the parent class constructor using `super` to initialize `name` and `age`.
- Initializes the `jobTitle` property.
- Has a method `getJobTitle()` that returns the job title, e.g., `"Job title is JobTitle"`.

### 4. Test the Classes and Inheritance

Test the `Person` and `Employee` classes by creating instances and calling their methods.

## Example Usage

```javascript
const person1 = new Person('Alice', 30);
console.log(person1.describe()); // Expected output: "Alice is 30 years old"

const employee1 = new Employee('Bob', 40, 'Software Engineer');
console.log(employee1.describe()); // Expected output: "Bob is 40 years old"
console.log(employee1.getJobTitle()); // Expected output: "Job title is Software Engineer"
```

# Memahami Warisan Kelas dan `super` dalam JavaScript

## Tujuan

Pelajari cara menggunakan kelas JavaScript untuk membuat objek dengan properti dan metode bersama. Tugas ini akan membantu Anda memahami cara menggunakan pewarisan untuk memperluas kelas dasar dan menggunakan kata kunci `super` untuk memanggil konstruktor kelas induk.

## Petunjuk

### 1. Memahami Konsep

- **Class (`ParentClass`)**: Cetak biru untuk membuat objek. Kelas merangkum data dengan kode untuk mengerjakan data tersebut.
- **Warisan**: Mekanisme yang memungkinkan suatu kelas mewarisi properti dan metode dari kelas lain.
- **`super` Kata Kunci**: Digunakan untuk memanggil konstruktor kelas induk dan mengakses metode kelas induk.

### 2. Menerapkan Kelas `Orang`

Anda akan mengimplementasikan kelas bernama `Person` yang:

- Menerima `nama` dan `usia` sebagai parameter.
- Menginisialisasi properti ini pada objek yang dibuat.
- Memiliki metode `deskripsikan()` yang mengembalikan string yang merangkum detail orang tersebut, misalnya, `"Nama adalah Usia tahun"`.

### 3. Menerapkan Kelas `Karyawan` yang Mewarisi dari `Orang`

Anda akan mengimplementasikan kelas bernama `Karyawan` yang:

- Mewarisi dari `Orang` menggunakan kata kunci `extends`.
- Menerima `nama`, `usia`, dan `Judul pekerjaan` sebagai parameter.
- Memanggil konstruktor kelas induk menggunakan `super` untuk menginisialisasi `nama` dan `usia`.
- Menginisialisasi properti `jobTitle`.
- Memiliki metode `getJobTitle()` yang mengembalikan jabatan, misalnya, `"Judul pekerjaan adalah Judul Pekerjaan"`.

### 4. Uji Kelas dan Warisan

Uji kelas `Orang` dan `Karyawan` dengan membuat instance dan memanggil metodenya.

## Contoh Penggunaan

```javascript
const orang1 = Orang baru('Alice', 30);
console.log(person1.describe()); // Hasil yang diharapkan: "Alice berusia 30 tahun"

const Employee1 = Karyawan baru('Bob', 40, 'Insinyur Perangkat Lunak');
console.log(karyawan1.deskripsikan()); // Hasil yang diharapkan: "Bob berusia 40 tahun"
console.log(karyawan1.getJobTitle()); // Hasil yang diharapkan: "Judul pekerjaan adalah Insinyur Perangkat Lunak"
```
