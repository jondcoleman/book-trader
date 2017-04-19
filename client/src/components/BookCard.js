import React from 'react'
import BookCardButton from './BookCardButton'

const BookCard = React.createClass({
  propTypes: {
    book: React.PropTypes.object,
    cardType: React.PropTypes.string,
    addBook: React.PropTypes.func,
    deleteBook: React.PropTypes.func,
  },
  getClickHandler: function(type) {
    switch (type) {
      case 'add':
        return (e) => {
          e.target.disabled = true
          this.props.addBook(this.props.book)
        }
      case 'delete':
        return (e) => {
          e.target.disabled = true
          this.props.deleteBook(this.props.book)
        }
      case 'request':
        return (e) => {
          e.target.disabled = true
          this.props.createNewProposal(this.props.book)
          this.props.changePage('OfferBook')
        }
      case 'offer':
        return (e) => {
          e.target.disabled = true
          this.props.createTrade(this.props.book)
          this.props.changePage('Trades')
        }
      case 'accept':
        return null
      default:
        return null
    }
  },
  getButton: function(type) {
    const lowerType = type.toLowerCase()
    const props = this.buttonDetails[lowerType]
    return <BookCardButton {...props} handleClick={this.getClickHandler(lowerType)} />
  },
  buttonDetails: {
    add: { class: '', label: 'Add' },
    delete: { class: 'alert', label: 'Delete' },
    request: { class: '', label: 'Request' },
    offer: { class: 'success', label: 'Offer' },
    accept: { class: 'success', label: 'Accept' }
  },
  handleImgError(e) {
    e.target.src = 'https://s3.amazonaws.com/jc-static-assets/BookTraderAssets/no-cover.gif'
  },
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
