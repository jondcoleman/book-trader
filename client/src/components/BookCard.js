import React from 'react'
import books from './data'

const BookCard = React.createClass({
  getButton: function() {
    let buttons = {
      Add: <button type="button" className="button" onClick={this.handleAdd}>Add</button>,
      Delete: <button type="button" className="button alert" onClick={this.handleDelete}>Delete</button>,
      Request: <button type="button" className="button success" onClick={this.handleRequest}>Request</button>,
      Choose: <button type="button" className="button success" onClick={this.handleChoose}>Choose</button>,
      Accept: <button type="button" className="button success" onClick={this.handleAccept}>Accept</button>,
    }
    return buttons[this.props.action]
  },
  render: function() {
    return (
      <div className="book card column small-6 medium-3 large-2 align-stretch" ref="bookCol">
        <div className="flex-item">
        <img onError={this.handleImgError} className="thumbnail book image" src={this.props.book.imageUrl} alt={this.props.book.title}/>
          </div>
        <div className="spacer"></div>
        <div className="book title">{this.props.book.title}</div>
        {this.getButton()}
      </div>
    )
  },
  handleImgError(e) {
    e.target.src = 'https://dl.dropboxusercontent.com/u/600747/BookTraderAssets/no-cover.gif'
  },
  handleAdd(e) {
    e.target.disabled = true
    books.push(
      {
        id: this.props.book.id,
        title: this.props.book.title,
        authors: this.props.book.authors,
        imageUrl: this.props.book.imageUrl
      }
    )
    console.log(JSON.stringify(books))
  },
  handleDelete: function () {
    notImpl()
  },
  handleRequest: function() {
    notImpl()
  },
  handleAccept: function() {
    notImpl()
  },
  handleChoose: function() {
    notImpl()
  }
})

export default BookCard