const library = [];

function Book(title, author, pages, read) {
  if (!new.target)
    throw Error("You must use the 'new' operator to call the constructor");
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  const readStatus = this.read ? "already read" : "not read yet";
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
};

function addBookToLibrary(book) {
  library.push(book);
}

const addBtn = document.getElementById("add");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const readInput = document.getElementById("read");

addBtn.addEventListener("click", () => {
  if (!titleInput.value || !authorInput.value)
    alert("Please fill in all fields");
});
