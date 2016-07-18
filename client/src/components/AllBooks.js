import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators.js'
import BookList from './BookList'
import app from '../feathers-app'

const bookService = app.service('books')

let AllBooks = React.createClass({
  componentDidMount: function(){
    console.log('context', this)
    this.props.fetchAllBooks()
  },
  render: function() {
    return (
      <div>
        <BookList action='Request' books={this.props.books || []}/>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(actionCreators, dispatch)

AllBooks = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(AllBooks)


export default AllBooks
