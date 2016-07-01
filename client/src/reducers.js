import { combineReducers } from 'redux'
import { UPDATE_USER } from './actions.js'

function user(state = {}, action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.details
    default:
      return state
  }
}

const bookApp = combineReducers({
  user
})

export default bookApp
