import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './containers/AppCont'
// TODO only add devtools extension when NODE_ENV === 'development'
let store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

const Index = () => (
  < Provider store={store} >
    <App />
  </ Provider >
)

render(<Index />, document.getElementById('app'))
