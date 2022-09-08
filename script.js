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
        read = e.target.checked;
    });
}

function updateDisplay() {
    const gird = document.querySelector('.grid');
    libraryBooks.forEach((book) => {
        gird.innerHTML = htmlTemplate(book);
    });
}

function htmlTemplate(book) {
    let checkbox  = 'Not read';
    if (book[read]) {checkbox = 'Read';}
    str = `<div class="card"> \
    <h2>${book.title}</h2> \
    <div>${book.author}</div> \
    <div>${book.pages}</div> \
    <div class="buttons"> \
        <button class="read">${checkbox}</button> \
        <button class="remove">remove</button> \
    </div> \
</div>`
    return str;
}
