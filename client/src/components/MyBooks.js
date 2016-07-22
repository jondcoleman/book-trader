import React from 'react'
import BookList from './BookList'

const MyBooks = React.createClass({
  propTypes: {
    fetchAllBooks: React.PropTypes.func
  },
  componentDidMount: function() {
    this.props.fetchAllBooks()
  },
  render: function() {
    return (
      <div>
        <BookList cardType="Delete" {...this.props} />
      </div>
    )
  }
})

export default MyBooks
