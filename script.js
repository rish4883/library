let libraryBooks = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function storeBook(book) {
    libraryBooks.push(book);
}

const addBook = document.querySelector('.add-book');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close');
const add = document.querySelector('.add-button');


addBook.addEventListener('click', () => {
    popup.classList.remove('hidden');
    processForm();
});

closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});

