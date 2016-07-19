import React from 'react'
import BookCardButton from './BookCardButton'

const BookCard = React.createClass({
  propTypes: {
    book: React.PropTypes.object,
    clickHandler: React.PropTypes.func,
    cardType: React.PropTypes.string
  },
  getButton: function(type) {
    const props = this.buttonDetails[type.toLowerCase()]
    return <BookCardButton {...props} handleClick={this.props.clickHandler} />
  },
  buttonDetails: {
    add: { class: '', label: 'Add' },
    delete: { class: '', label: 'Add' },
    request: { class: '', label: 'Add' },
    offer: { class: '', label: 'Add' },
    accept: { class: '', label: 'Add' }
  },
  handleClick: function(e) {
    e.target.disabled = true
    this.props.clickHandler(this.props.book)
  },
  // TODO: put this back
  // handleImgError(e) {
  //   e.target.src = 'https://dl.dropboxusercontent.com/u/600747/BookTraderAssets/no-cover.gif'
  // },
  render: function() {
    return (
      <div className="book card column small-6 medium-3 large-2 align-stretch" ref="bookCol">
        <div className="flex-item">
          <img
            onError={this.handleImgError}
            className="thumbnail book image"
            src={this.props.book.imageUrl || 'noimage'}
            alt={this.props.book.title}
          />
        </div>
        <div className="spacer"></div>
        <div className="book title">{this.props.book.title}</div>
        {this.getButton(this.props.cardType)}
      </div>
    )
  }
})

export default BookCard
