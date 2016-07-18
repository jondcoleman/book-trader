import React from 'react'
import BookList from './BookList'

const MyBooks = React.createClass({
  render: function() {
    return (
      <div>
        <BookList action="Delete" books={this.props.books} />
      </div>
    )
  }
})

export default MyBooks
