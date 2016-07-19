import React from 'react'
import BookList from './BookList'

const AllBooks = React.createClass({
  propTypes: {
    fetchAllBooks: React.PropTypes.func,
    books: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      requesting: false
    }
  },
  componentDidMount: function() {
    this.props.fetchAllBooks()
  },
  toggleRequesting: function() {
    this.setState({ requesting: !this.state.requesting })
  },
  renderVisibleComponent: function() {
    const cardType = this.state.requesting ? 'Offer' : 'Request'
    return (
      <BookList
        cardType={cardType}
        toggleRequesting={this.toggleRequesting}
        books={this.props.books || []}
      />
    )
  },
  render: function() {
    return (
      <div>
        {this.renderVisibleComponent()}
      </div>
    )
  }
})

export default AllBooks
