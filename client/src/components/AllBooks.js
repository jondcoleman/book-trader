import React from 'react'
import BookCard from '../containers/BookCardCont'

const AllBooks = React.createClass({
  propTypes: {
    fetchAllBooks: React.PropTypes.func,
    books: React.PropTypes.array.isRequired,
    user: React.PropTypes.object
  },
  componentDidMount: function() {
    this.props.fetchAllBooks()
  },
  getMyBooks: function() {
    return this.props.books.filter(book => book.userId === this.props.user._id)
  },
  render: function() {
    const books = this.props.books.map(book => {
      const cardType = book.userId === this.props.user._id ? 'Delete' : 'Request'
      return (
        <BookCard
          {...this.props}
          cardType={cardType}
          book={book}
          key={book._id}
        />
      )
    })
    return (
      <div className="row align-middle">
        {books}
      </div>
    )
  }
})

export default AllBooks
