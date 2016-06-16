import React from 'react'
import BookCard from './BookCard'

const Trade = React.createClass({
  render: function () {
    return (
      <div>
        <BookCard book={this.props.bookOffered}/>
        <BookCard book={this.props.bookRequested}/>
      </div>
    )
  }
})

export default Trade
