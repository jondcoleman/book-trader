import app from '../feathers-app'
const bookService = app.service('books')
const userService = app.service('users')
const tradeService = app.service('trades')

export function changePage(page) {
  return { type: 'CHANGE_PAGE', page }
}

export function clearProposal() {
  return { type: 'CLEAR_PROPOSAL' }
}

export function createNewProposal(bookRequested) {
  return { type: 'NEW_PROPOSAL', book: bookRequested }
}

export function updateUser(details) {
  return (dispatch) => {
    userService.patch(details._id, {
      firstName: details.firstName,
      lastName: details.lastName,
      city: details.city,
      state: details.state,
    })
    .then(res => dispatch({ type: 'UPDATE_USER', user: res }))
    .catch(err => console.error(err))
  }
}

export function authenticateUser() {
  return dispatch => {
    app.authenticate()
      .then(res => {
        dispatch({ type: 'AUTHENTICATE_USER', bool: true, details: res.data })
      })
      .catch(err => {
        console.error(err)
        dispatch({ type: 'AUTHENTICATE_USER', bool: false, details: {} })
      })
  }
}

export function fetchAllBooks() {
  return (dispatch) => {
    bookService.get()
      .then(res => dispatch({ type: 'FETCH_ALL_BOOKS', books: res.data }))
      .catch(err => console.error(err))
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
    .catch(err => console.error(err))
  }
}

export function deleteBook(book) {
  return dispatch => {
    bookService.remove(book._id)
    .then(() => dispatch({ type: 'DELETE_BOOK', bookId: book._id }))
    .catch(err => console.error(err))
  }
}

export function fetchTrades() {
  return dispatch => {
    tradeService.find()
    .then(res => dispatch({ type: 'FETCH_TRADES', trades: res.data }))
    .catch(err => console.error(err))
  }
}

export function createTrade(bookOffered) {
  return (dispatch, getState) => {
    const state = getState()
    const bookRequested = state.proposal.bookRequested
    tradeService.create({
      bookOffered: bookOffered,
      bookRequested: bookRequested
    })
    .then(() => dispatch({ type: 'CLEAR_PROPOSAL' }))
    .catch(err => console.error(err))
  }
}

export function deleteTrade(tradeId) {
  return dispatch => {
    tradeService.remove(tradeId)
    .then(() => dispatch({ type: 'DELETE_TRADE', tradeId }))
    .catch(err => console.error(err))
  }
}

export function acceptTrade(tradeId) {
  return dispatch => {
    tradeService.patch(tradeId, { transition: 'approve' })
    .then((res) => dispatch({ type: 'ACCEPT_TRADE', data: res.data }))
  }
}
