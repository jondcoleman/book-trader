function books(state = [], action) {
  switch (action.type) {
    case 'FETCH_ALL_BOOKS':
      return action.books
    case 'DELETE_BOOK':
      return state.filter(book => book._id !== action.bookId)
    default:
      return state
  }
}

export default books
