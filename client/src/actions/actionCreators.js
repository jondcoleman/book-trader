import app from '../feathers-app'
const bookService = app.service('books')
const userService = app.service('users')

export function updateUser(details) {
  return { type: 'UPDATE_USER', details }
}

export function getUser() {
  return { type: 'GET_USER' }
}

export function authenticateUser(bool, details) {
  return { type: 'AUTHENTICATE_USER', bool, details }
}

export function loadAllBooks(books) {
  return { type: 'LOAD_ALL_BOOKS', books }
}

export function addBook(book) {
  return { type: 'ADD_BOOK', book }
}

export function fetchMyBooks() {
  return function(dispatch) {

  }
}
