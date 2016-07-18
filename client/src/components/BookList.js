import React from 'react'
import BookCard from '../containers/BookCardCont'

const BookList = React.createClass({
  render: function(){
    let action = this.props.action
    console.log('props', this.props.books)
    let books = this.props.books.map(function(book) {
      let props = { book, action }
      // _id or id for searching or internal id
      return <BookCard {...props} key={props.book._id || props.book.id} />
    })
    return (
      <div className="row align-middle">
        {books}
      </div>
    )
  }
})

export default BookList
