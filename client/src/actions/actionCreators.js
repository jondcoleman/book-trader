import app from '../feathers-app'
const bookService = app.service('books')
const userService = app.service('users')
const tradeService = app.service('trades')

export function updateUser(details) {
  return (dispatch) => {
    userService.patch(details._id, {
      firstName: details.firstName,
      lastName: details.lastName,
      city: details.city,
      state: details.state,
    })
    .then(res => dispatch({ type: 'UPDATE_USER', user: res }))
    .catch(err => console.log(err))
  }
}

export function authenticateUser(bool, details) {
  return { type: 'AUTHENTICATE_USER', bool, details }
}

export function fetchAllBooks() {
  return (dispatch) => {
    bookService.get()
      .then(res => dispatch({ type: 'FETCH_ALL_BOOKS', books: res.data }))
      .catch(err => console.log(err))
  }
}

export function addBook(book) {
  return dispatch => {
    bookService.create({
      id: book.id,
      title: book.title,
      authors: book.authors,
      imageUrl: book.imageUrl
    })
    .then(result => dispatch({ type: 'ADD_BOOK', result }))
    .catch(err => console.log(err))
  }
}

export function deleteBook(book) {
  return dispatch => {
    bookService.remove(book._id)
    .then(res => dispatch({ type: 'DELETE_BOOK', bookId: book._id }))
    .catch(err => console.log(err))
  }
}

export function fetchTrades() {
  return dispatch => {
    tradeService.find()
    .then(res => dispatch({ type: 'FETCH_TRADES', trades: res.data }))
    .catch(err => console.log(err))
  }
}
