const defaultState = {
  authenticated: false,
  authPending: true
}

function users(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return Object.assign({}, state, action.user)
    case 'AUTHENTICATE_USER':
      return Object.assign({}, state, {
        authenticated: action.bool,
        authPending: false
      }, action.details)
    default:
      return state
  }
}

export default users
