const library = [];

const addBtn = document.getElementById("add");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const tableBody = document.querySelector("table tbody");

class Book {
  constructor(title, author, pages, read) {
    if (!new.target)
      throw Error("You must use the 'new' operator to call the constructor");
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    const readStatus = this.read ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  }
}

function addBookToLibrary(book) {
  library.push(book);
}

function updateLibrary() {
  tableBody.innerHTML = "";
  library.forEach((book) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.read ? "Read" : "Not read";
    row.appendChild(readCell);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList = "remove";
    row.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => {
      tableBody.removeChild(row);
      library.splice(
        library.findIndex((i) => i.id === book.id),
        1
      );
    });

    tableBody.appendChild(row);
  });
}

addBtn.addEventListener("click", () => {
  if (!titleInput.value || !authorInput.value || !pagesInput.value)
    alert("Please fill in all fields");
  else {
    let newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked
    );
    addBookToLibrary(newBook);
    updateLibrary();
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
  }
});

// Demo content
addBookToLibrary(
  new Book("The Pragmatic Programmer", "Andrew Hunt", 352, true)
);
addBookToLibrary(new Book("Clean Code", "Robert C. Martin", 464, false));
addBookToLibrary(
  new Book("Eloquent JavaScript", "Marijn Haverbeke", 472, true)
);

updateLibrary();
