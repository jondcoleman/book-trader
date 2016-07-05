import app from './feathers-app'
const bookService = app.service('books')
const userService = app.service('users')


export const UPDATE_USER = 'UPDATE_USER'
export const GET_USER = 'GET_USER'

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
export const LOAD_ALL_BOOKS = 'LOAD_ALL_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'

export function updateUser(details) {
  return { type: UPDATE_USER, details }
}

export function getUser() {
  return { type: GET_USER }
}

export function authenticateUser(bool, details) {
  return { type: AUTHENTICATE_USER, bool, details }
}

export function loadAllBooks(books) {
  return { type: LOAD_ALL_BOOKS, books }
}

export function addBook(book) {
  return { type: ADD_BOOK, book }
}

export function fetchMyBooks() {
  return function(dispatch) {
    
  }
}
