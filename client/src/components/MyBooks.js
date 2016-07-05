import React from 'react'
import BookList from './BookList'
import { connect } from 'react-redux'

import app from '../feathers-app'

const bookService = app.service('books')

let MyBooks = React.createClass({
  getInitialState: function() {
    return { books: [] }
  },
  componentDidMount: function() {
    bookService.find({ query: { userId: this.props.user._id } })
    .then((res) => this.setState({ books: res.data }))
    .catch((err) => console.log(err))
  },
  render: function() {
    console.log('render', this.props.user)
    return (
      <div>
        <BookList action="Delete" books={this.state.books} />
      </div>
    )
  }
})

function mapStateToProps(state) {
  return { user: state.user }
}

MyBooks = connect(
  mapStateToProps
)(MyBooks)

export default MyBooks
