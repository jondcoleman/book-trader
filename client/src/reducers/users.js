const defaultState = {
  authenticated: false,
  authPending: true
}

function users(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      console.log(action)
      return Object.assign({}, state, action.user)
    // case GET_USER:
    //
    //   return state
    case 'AUTHENTICATE_USER':
      console.log(action)
      return Object.assign({}, state, {
        authenticated: action.bool,
        authPending: false
      }, action.details)
    default:
      return state
  }
}

export default users
