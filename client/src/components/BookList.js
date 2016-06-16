import React from 'react'
import BookCard from './BookCard'

const BookList = React.createClass({
  render: function(){
    let action = this.props.action
    let books = this.props.books.map(function(book) {
      let props = { book, action }
      return <BookCard {...props} key={props.book.id}/>
    })
    return (
      <div className="row align-middle">
        {books}
      </div>
    )
  }
})

export default BookList
