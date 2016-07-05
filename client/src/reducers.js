import { combineReducers } from 'redux'
import { UPDATE_USER } from './actions.js'

const defaultState = {
  FirstName: 'Jonathan'
}

function user(state = defaultState, action) {
  console.log(state)
  switch (action.type) {
    case UPDATE_USER:
      console.log('test')
      console.log(action)
      return action.details
    default:
      return state
  }
}

const bookApp = combineReducers({
  user
})

export default bookApp
