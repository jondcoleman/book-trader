import React from 'react'
import BookCard from '../containers/BookCardCont'

const OfferBook = props => {
  const books = props.books.map(book => (
    <BookCard
      {...props}
      cardType="Offer"
      book={book}
      key={book._id}
    />
    )
  )

  return (
    <div className="row align-middle">
      {books}
    </div>
  )
}

OfferBook.propTypes = {
  books: React.PropTypes.array
}

export default OfferBook
