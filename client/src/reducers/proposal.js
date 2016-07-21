function proposal(state = {}, action) {
  switch (action.type) {
    case 'NEW_PROPOSAL':
      return { bookRequested: action.book }
    case 'CLEAR_PROPOSAL':
      return {}
    default:
      return state
  }
}

export default proposal
