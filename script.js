const addBookBtn = document.querySelector('#addBookBtn')
const newBookBtn = document.querySelector('#newBookBtn')
const popUpForm = document.querySelector('#pop-up')
const bookForm = document.querySelector('#form')

let myLibrary = []
let newBook

const addBookToLibrary = () => {
  popUpForm.style.display = 'none'
  newBook = new Book(title, author, pages,read); 
    myLibrary.push(newBook); 
  console.log(newBook)
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


