import React from 'react'
import BookSearch from './BookSearch'
import AllBooks from '../containers/AllBooksCont'
import MyBooks from '../containers/MyBooksCont'
import Trades from '../containers/TradesCont'
import ProfileContainer from '../containers/profileContainer'
import OfferBook from '../containers/OfferBookCont'

const Main = React.createClass({
  getPage: function() {
    const pages = {
      Add: <BookSearch />,
      All: <AllBooks />,
      My: <MyBooks />,
      Trades: <Trades />,
      Profile: <ProfileContainer />,
      OfferBook: <OfferBook />
    }
    return pages[this.props.page]
  },
  handlePage: function(page) {
    console.log(page)
    this.props.changePage(page)
  },
  render: function() {
    return (
      <div>
        <ul className="vertical medium-horizontal menu">
          <li className={this.props.page === 'Add' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(null, 'Add')}>Add a Book</a>
          </li>
          <li className={this.props.page === 'All' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(null, 'All')}>All Books</a>
          </li>
          <li className={this.props.page === 'My' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(null, 'My')}>My Books</a>
          </li>
          <li className={this.props.page === 'Trades' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(null, 'Trades')}>Trades</a>
          </li>
          <li className={this.props.page === 'Profile' ? 'active' : ''}>
            <a href="#" onClick={this.handlePage.bind(null, 'Profile')}>Profile</a>
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
