import React from 'react'
import { render } from 'react-dom'
import BookSearch from './components/BookSearch'
import AllBooks from './components/AllBooks'
import MyBooks from './components/MyBooks'
import Trades from './components/Trades'
import Profile from './components/Profile'
import Spinner from './components/Spinner'
import AuthWrapper from './components/AuthWrapper'
import $ from 'jquery'
import feathers from 'feathers-client'

import books from './components/data'

const host = 'http://localhost:3030'

const app = feathers()
  .configure(feathers.rest(host).fetch(fetch))
  .configure(feathers.hooks())
  .configure(feathers.authentication())

const App = React.createClass({
  getInitialState: function() {
    return {
      page: 'Add',
      authenticated: false,
      pending: true
    }
  },
  componentDidMount: function() {
    app.authenticate()
      .then(data => this.setState({ authenticated: true, pending: false }))
      .catch(err => {
        this.setState({ pending: false })
        console.error(err)
      })
  },
  getPage: function() {
    let pages = {
      Add: <BookSearch/>,
      All: <AllBooks/>,
      My: <MyBooks/>,
      Trades: <Trades/>,
      Profile: <Profile />
    }
    return pages[this.state.page]
  },
  handlePage: function(page) {
    this.setState({ page })
  },
  renderPage: function() {
    return (
      <div>
        <ul className="vertical medium-horizontal menu">
          <li className={this.state.page === 'Add' ? "active": ""}>
            <a href="#1" onClick={this.handlePage.bind(this, 'Add')}>Add a Book</a>
          </li>
          <li className={this.state.page === 'All' ? "active": ""}>
            <a href="#2" onClick={this.handlePage.bind(this, 'All')}>All Books</a>
          </li>
          <li className={this.state.page === 'My' ? "active": ""}>
            <a href="#3" onClick={this.handlePage.bind(this, 'My')}>My Books</a>
          </li>
          <li className={this.state.page === 'Trades' ? "active": ""}>
            <a href="#4" onClick={this.handlePage.bind(this, 'Trades')}>Trades</a>
          </li>
          <li className={this.state.page === 'Profile' ? "active": ""}>
            <a href="#5" onClick={this.handlePage.bind(this, 'Profile')}>Profile</a>
          </li>
        </ul>
        <hr/>
        <div className="row">
          <div className="column small-12">
            {this.getPage()}
          </div>
        </div>
      </div>
    )
  },
  render: function() {
    if (this.state.pending) return <Spinner spin={true} />
    return <AuthWrapper authenticated={this.state.authenticated} component={this.renderPage()} />
  }
})

render(<App/>, document.getElementById('app'))
