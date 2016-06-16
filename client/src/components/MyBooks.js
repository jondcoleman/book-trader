import React from 'react'
import BookList from './BookList'
import books from './data'

const MyBooks = React.createClass({
  render: function() {
    return (
      <div>
        <BookList action='Delete' books={books}/>
      </div>
    )
  }
})

export default MyBooks
