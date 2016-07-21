import { combineReducers } from 'redux'

import users from './users'
import books from './books'
import trades from './trades'
import proposal from './proposal'
import page from './page'

const rootReducer = combineReducers({ users, books, trades, proposal, page })

export default rootReducer
