import React from 'react'
import { connect } from 'react-redux'
import { loadAllBooks } from '../actions/actionCreators.js'
import BookList from './BookList'
import app from '../feathers-app'

const bookService = app.service('books')

let AllBooks = React.createClass({
  componentDidMount: function(){
    console.log('context', this)
    this.props.loadAllBooks()
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadAllBooks: () => {
      bookService.get()
      .then(function(res){
        console.log(res.data)
        dispatch(loadAllBooks(res.data))
      })
    }
  }
}

AllBooks = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(AllBooks)


export default AllBooks
