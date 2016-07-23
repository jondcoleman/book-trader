import React from 'react'
import BookCard from '../containers/BookCardCont'

const BookList = function(props) {
  const books = props.books.map(book => (
    <BookCard {...props} book={book} key={book.id || book._id} />)
  )
  return (
    <div className="row align-middle">
      {books}
    </div>
  )
}

BookList.propTypes = {
  books: React.PropTypes.array
}

export default BookList
