// Exercise 1: Library Management System


class LibraryItem {
  constructor(
    protected title: string,
    protected author: string,
    private isCheckedOut: boolean
  ) {}

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
}

class Book extends LibraryItem {
  constructor(
    title: string,
    author: string,
    isCheckedOut: boolean,
    private pageNumber: number
  ) {
    super(title, author, isCheckedOut);
  }

  getSummary() {
    console.log(
      `Book ${this.title} has ${this.pageNumber} pages written by ${this.author}`
    );
  }
}

class DVD extends LibraryItem {
  constructor(
    title: string,
    author: string,
    isCheckedOut: boolean,
    private duration: number
  ) {
    super(title, author, isCheckedOut);
  }

  play() {
    console.log(`Playing ${this.title} of ${this.author}`);
  }
}



// Demonstration

const book = new Book( "Pragmatic Programmer", "Thierry", false, 400);
const dvd = new DVD("Real-life", "BAKERA", false, 400);


console.log(book, dvd)

book.getSummary();
book.toggleCheckOutStatus()
dvd.play();
dvd.toggleCheckOutStatus()

console.log(book, dvd)


