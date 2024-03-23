"use strict";
/**
 * ---------------------------------------------
 * ------- LIBRARY MANAGMENT SYSTEM ------------
 * ---------------------------------------------
 * Objective: Design a simple library management
 *            system to demonstrate encapsulation
 *            and inheritance.
 * ---------------------------------------------
 */
/**
 * Since this class does not have abstract methods, we can keep
 * it as a base class for all library items.
 */
class LibraryItem {
    constructor(title, author, isCheckedOut) {
        this.title = title;
        this.author = author;
        this.isCheckedOut = isCheckedOut;
    }
    /**
     * The [isCheckedOut] member is protected (not exposed), all
     * modifications of it are controlled in this method
     *
     * [Encapsulation]
     */
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
console.log(book, `\n\n`, dvd);
console.log(`\n`);
book.getSummary();
book.toggleCheckOutStatus();
console.log(`\n`);
dvd.play();
dvd.toggleCheckOutStatus();
console.log(`\n`);
console.log(book, '\n\n', dvd);
