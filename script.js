const addBookBtn = document.querySelector('#addBtn')
const newBookBtn = document.querySelector('#newBookBtn')
const popUpForm = document.querySelector('#pop-up')
const bookForm = document.querySelector('#form')

let myLibrary = []
let newBook


const addBookToLibrary = () => {
  event.preventDefault()
  console.log('what is going on here')
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  const read = document.querySelector('#read').value
  newBook = new Book(title, author, pages,read)
  myLibrary.push(newBook)
  console.log(newBook)
  popUpForm.style.display = 'none'
  bookForm.reset()
}

addBookBtn.addEventListener('click', addBookToLibrary)

newBookBtn.addEventListener('click', () => {
  popUpForm.style.display = 'block'
})



class Book {
  constructor(title, author, pages, read) {
      this.title = title; 
      this.author = author; 
      this.pages = pages + 'pg'; 
      this.read = read; 
  }
}


