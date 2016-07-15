function books(state = [], action) {
  switch (action.type) {
    case 'LOAD_ALL_BOOKS':
      return action.books
    default:
      return state
  }
}

export default books
