let libraryBooks = [];
let count = 0;

// Button and other DOM elements
const addBook = document.querySelector('.add-book');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close');
const addButton = document.querySelector('.add');
const form = document.querySelector('.form');
const grid = document.querySelector('.grid');

// Book object properties
let title = '';
let author = '';
let pages = '';
let read = false;

// Book info elements
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const pagesInput = document.querySelector('.pages');
const readInput = document.querySelector('.read');

// Book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function storeBook(book) {
    libraryBooks.push(book);
}

// Event listener for popup trigger button
addBook.addEventListener('click', () => {
    form.reset();
    popup.classList.remove('hidden');
    
});

// Event listener for closing popup
closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Event for add button after filling form
addButton.addEventListener('click', () => {
    if(!title || !author || !pages) {return;}
    let temp = new Book(title, author, pages, read);
    storeBook(temp);
    updateDisplay(libraryBooks[count]);
    count++;
    read = false;
});

// Detect input in the form and store the data in respective variables
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
    temp.innerHTML = htmlTemplate(book);     // Template for the cards
    grid.appendChild(temp);
    // Add listeners to remove and read buttons after creation of element
    document.querySelector(`.grid div:nth-child(${count+1}) .read`).addEventListener('click', handleRead);
    document.querySelector(`.grid div:nth-child(${count+1}) .remove`).addEventListener('click', handleRemove);
}

function handleRead(event) {
    temp = event.target.textContent;
    event.target.textContent = temp == "Read" ? "Not read" : "Read";
}

function handleRemove(e) {
    // Delete from libraryBooks array
    let tempTitle = e.target.parentNode.parentNode.querySelector('h2').textContent;
    libraryBooks.forEach((book, index, bookList) => {
        if(book.title == tempTitle) {
            bookList.splice(index, 1);
        }
    });
    // Delete from DOM
    grid.removeChild(e.target.parentNode.parentNode.parentNode);
    count--;
}

// Book card template
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
