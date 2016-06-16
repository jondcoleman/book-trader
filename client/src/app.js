import React from 'react'
import { render } from 'react-dom'
import BookSearch from './components/BookSearch'
import AllBooks from './components/AllBooks'
import MyBooks from './components/MyBooks'
import Trades from './components/Trades'
import Profile from './components/Profile'

import books from './components/data'

const App = React.createClass({
  getInitialState: function() {
    return { page: 'Add' }
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
  render: function() {
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
  }
})

render(<App/>, document.getElementById('app'))
