import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators.js'
import BookList from './BookList'

const AllBooks = React.createClass({
  componentDidMount: function(){
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

export default AllBooks
