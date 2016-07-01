import { createStore } from 'redux'
import bookApp from './reducers'

let store = createStore(bookApp)

export default store
