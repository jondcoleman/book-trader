import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators.js'
import BookList from './BookList'

const AllBooks = React.createClass({
  getInitialState: function() {
    return {
      requesting: false
    }
  },
  componentDidMount: function(){
    this.props.fetchAllBooks()
  },
  toggleRequesting: function() {
    this.setState({ requesting: !this.state.requesting })
  },
  renderVisibleComponent: function() {
    return this.state.requesting ? <BookList action="Offer" toggleRequesting={this.toggleRequesting} books={this.props.books || []} />
  : <BookList action="Request" toggleRequesting={this.toggleRequesting} books={this.props.myBooks || []} />
  },
  render: function() {
    return (
      <div>
        {this.renderVisibleComponent()}
      </div>
    )
  }
})

export default AllBooks
