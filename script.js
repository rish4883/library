let libraryBooks = [];
let count = 0;

const addBook = document.querySelector('.add-book');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close');
const addButton = document.querySelector('.add');
const form = document.querySelector('.form');

let title = '';
let author = '';
let pages = '';
let read = false;

const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const pagesInput = document.querySelector('.pages');
const readInput = document.querySelector('.read');
const grid = document.querySelector('.grid');


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function storeBook(book) {
    libraryBooks.push(book);
}

addBook.addEventListener('click', () => {
    form.reset();
    popup.classList.remove('hidden');
    
});

closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});

addButton.addEventListener('click', () => {
    if(!title || !author || !pages) {return;}
    let temp = new Book(title, author, pages, read);
    storeBook(temp);

    updateDisplay(libraryBooks[count++]);
});

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
    read = e.target.checked;
});

function updateDisplay(book) {
    
    popup.classList.add('hidden');
    const temp = document.createElement('div');
    temp.innerHTML = htmlTemplate(book);
    grid.appendChild(temp);
    
}

function htmlTemplate(book) {
    let checkbox  = 'Not read';
    if(book.read) {checkbox = 'Read';}
    let str = `<div class="card">
    <h2>${book.title}</h2>
    <div>${book.author}</div>
    <div>${book.pages}</div>
    <div class="buttons">
        <button class="read">${checkbox}</button>
        <button class="remove">remove</button>
    </div>
</div>`
    return str;
}
