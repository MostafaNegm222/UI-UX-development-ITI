
function Box(height, width, length, material) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.numOfBooks = 0;
    this.volume = height * width * length;
    this.content = [];

    this.addBook = function(book) {
    this.content.push(book);
    this.numOfBooks++;
    };


    this.deleteBook = function(property) {
      this.content = this.content.filter(book => book.name !== property && book.type !== property);
      this.numOfBooks = this.content.length;
    };


    this.toString = function() {
    return `Box - Dimensions: ${this.height}x${this.width}x${this.length}, Material: ${this.material}, Number of Books: ${this.numOfBooks}`;
    };


    this.valueOf = function() {
    return this.numOfBooks;
    };
  }


function Book (name,type,numOfChapters,author,numPages,publisher,numOfCopies) {
    this.name =name
    this.type = type || "good"
    this.numOfChapters = numOfChapters || 3
    this.author = author || "Negm"
    this.numPages = numPages || 40
    this.publisher = publisher || "Negm"
    this.numOfCopies = numOfCopies || 5
}




var box1 = new Box(10, 8, 12, "Cardboard");
var box2 = new Box(15, 10, 18, "Wood");

var book1 = new Book("Book1", "Fiction");
var book2 = new Book("Book2", "Non-Fiction");
var book3 = new Book("Book3", "Science");


box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);
box2.addBook(book1);
box2.addBook(book2);
box2.addBook(book3);
console.log(box1);
console.log(box2);

box1.deleteBook("Fiction");
box1.deleteBook("Book2");

document.write(box1)
var totalBooks = box1 + box2;
console.log(`Total books in both boxes: ${totalBooks}`);

