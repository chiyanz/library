const addBookBtn = document.querySelector('#addBtn')
const newBookBtn = document.querySelector('#newBookBtn')
const popUpForm = document.querySelector('#pop-up')
const bookForm = document.querySelector('#form')
const closeFormBtn = document.querySelector('.close')


let myLibrary = []
let newBook

function render() {
  const bookShelf = document.querySelector('#book-container')
  const books = document.querySelectorAll('.book')
  books.forEach(book => bookShelf.removeChild(book))

  for(let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i])
  }
}

function displayBook(book) {
  const library = document.querySelector('#book-container')
  const bookDiv = document.createElement('div')
  const titleDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const pageDiv = document.createElement('div')
  const readBtn = document.createElement('button')
  const deleteBtn = document.createElement('button')

  deleteBtn.classList.add('delete')
  deleteBtn.textContent = 'X'

  readBtn.classList.add('button-17')
  if(book.read != true) {
    readBtn.textContent = 'Not Read'
    readBtn.style.backgroundColor = '#e04f63'
  }
  else {
    readBtn.textContent = 'Read'
    readBtn.style.backgroundColor = '#7BE383'
  }

  titleDiv.textContent = book.title
  titleDiv.classList.add('title')

  bookDiv.appendChild(deleteBtn)
  bookDiv.appendChild(titleDiv)

  authorDiv.textContent = book.author;
  authorDiv.classList.add('author')
  bookDiv.appendChild(authorDiv)

  pageDiv.textContent = book.pages
  pageDiv.classList.add('pages')
  bookDiv.appendChild(pageDiv)
  bookDiv.appendChild(readBtn)

  bookDiv.classList.add('book')
  library.appendChild(bookDiv)

  deleteBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(book), 1)
    setData()
    render()

  })

  readBtn.addEventListener('click', () => {
    book.read = !book.read
    setData()
    render()
  })
}

const addBookToLibrary = () => {
  event.preventDefault()
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  const read = document.querySelector('#read').checked
  newBook = new Book(title, author, pages,read)
  myLibrary.push(newBook)
  popUpForm.style.display = 'none'
  bookForm.reset()
  setData()
  render()
}

addBookBtn.addEventListener('click', addBookToLibrary)

newBookBtn.addEventListener('click', () => {
  popUpForm.style.display = 'block'
})

closeFormBtn.addEventListener('click', () => {
  popUpForm.style.display = 'none'
})


class Book {
  constructor(title, author, pages, read) {
      this.title = title; 
      this.author = author; 
      this.pages = pages + ' pages'; 
      this.read = read; 
  }
}


function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function restore() {
  if(!localStorage.myLibrary) {
      render()
  }else {
      let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
      objects = JSON.parse(objects)
      myLibrary = objects
      render()
  }
}

restore()

