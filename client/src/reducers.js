import { combineReducers } from 'redux'
import { UPDATE_USER, AUTHENTICATE_USER, LOAD_ALL_BOOKS } from './actions.js'

const defaultState = {
  authenticated: false,
  authPending: true
}

function user(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_USER:
      console.log(action)
      return Object.assign({}, state, action.details)
    // case GET_USER:
    //
    //   return state
    case AUTHENTICATE_USER:
      console.log(action)
      return Object.assign({}, state, {
        authenticated: action.bool,
        authPending: false
      }, action.details)
    default:
      return state
  }
}

function books(state = [], action) {
  switch (action.type) {
    case LOAD_ALL_BOOKS:
      return action.books
    default:
      return state
  }
}

const bookApp = combineReducers({
  user,
  books
})

export default bookApp
