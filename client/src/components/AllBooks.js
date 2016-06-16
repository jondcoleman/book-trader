import React from 'react'
import BookList from './BookList'

const AllBooks = React.createClass({
  render: function() {
    return (
      <div>
        <BookList action='Request' books={booksTest}/>
      </div>
    )
  }
})

export default AllBooks
