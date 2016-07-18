import React from 'react'
import BookSearch from './BookSearch'
import AllBooks from './AllBooks'
import MyBooks from '../containers/MyBooksCont'
import Trades from './Trades'
import ProfileContainer from '../containers/profileContainer'

console.log(MyBooks)

const Main = React.createClass({
  getInitialState: function() {
    return {
      page: 'Add'
    }
  },
  getPage: function() {
    const pages = {
      Add: <BookSearch />,
      All: <AllBooks />,
      My: <MyBooks />,
      Trades: <Trades />,
      Profile: <ProfileContainer />
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
          <li className={this.state.page === 'Add' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(this, 'Add')}>Add a Book</a>
          </li>
          <li className={this.state.page === 'All' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(this, 'All')}>All Books</a>
          </li>
          <li className={this.state.page === 'My' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(this, 'My')}>My Books</a>
          </li>
          <li className={this.state.page === 'Trades' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(this, 'Trades')}>Trades</a>
          </li>
          <li className={this.state.page === 'Profile' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(this, 'Profile')}>Profile</a>
          </li>
        </ul>
        <hr />
        <div className="row">
          <div className="column small-12">
            {this.getPage()}
          </div>
        </div>
      </div>
    )
  }
})

export default Main
