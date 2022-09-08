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

add.addEventListener('click', () => {
    temp = new Book(title, author, pages, read);
    libraryBooks.push(temp);
});

let title, author, pages, read;
function processForm() {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');
    const readInput = document.querySelector('#read');
    titleInput.addEventListener('change', (e) => {
       title = e.target.value; 
    });
    authorInput.addEventListener('change', (e) => {
        author = e.target.value;
    });
    pagesInput.addEventListener('change', (e) => {
        pages = e.target.value;
    });
    readInput.addEventListener('change', (e) => {
        read = e.target.value;
    });
}