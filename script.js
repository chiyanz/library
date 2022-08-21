const addBookBtn = document.querySelector('#addBookBtn')
const newBookBtn = document.querySelector('#newBookBtn')
const popUpForm = document.querySelector('#pop-up')


const addBookToLibrary = () => {
  popUpForm.style.display = 'none'
}

addBookBtn.addEventListener('click', addBookToLibrary)
newBookBtn.addEventListener('click', () => {
  popUpForm.style.display = 'block'
})



class Book {
  constructor(title, author, pages, read) {
      this.title = form.title.value; 
      this.author = form.author.value; 
      this.pages = form.pages.value + 'pg'; 
      this.read = form.read.checked; 
  }
}

let myLibrary = []
