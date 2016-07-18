import { combineReducers } from 'redux'

import users from './users'
import books from './books'
import trades from './trades'

const rootReducer = combineReducers({ users, books, trades })

export default rootReducer
