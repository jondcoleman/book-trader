import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import bookApp from './reducers'
import App from './app'

let store = createStore(bookApp, applyMiddleware(thunk))

const Index = () => {
  return (
    < Provider store={store} >
      <App />
    </ Provider >
  )
}

render(<Index />, document.getElementById('app'))
