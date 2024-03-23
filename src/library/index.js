"use strict";
// Exercise 1: Library Management System
class LibraryItem {
    constructor(title, author, isCheckedOut) {
        this.title = title;
        this.author = author;
        this.isCheckedOut = isCheckedOut;
    }
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
}
class Book extends LibraryItem {
    constructor(title, author, isCheckedOut, pageNumber) {
        super(title, author, isCheckedOut);
        this.pageNumber = pageNumber;
    }
    getSummary() {
        console.log(`Book ${this.title} has ${this.pageNumber} pages written by ${this.author}`);
    }
}
class DVD extends LibraryItem {
    constructor(title, author, isCheckedOut, duration) {
        super(title, author, isCheckedOut);
        this.duration = duration;
    }
    play() {
        console.log(`Playing ${this.title} of ${this.author}`);
    }
}
// Demonstration
const book = new Book("Pragmatic Programmer", "Thierry", false, 400);
const dvd = new DVD("Real-life", "BAKERA", false, 400);
console.log(book, dvd);
book.getSummary();
book.toggleCheckOutStatus();
dvd.play();
dvd.toggleCheckOutStatus();
console.log(book, dvd);
