import React from 'react'

const BookSearchResult = React.createClass({
  render: function(){
    return (
      <div>
        Title: {this.props.title}  |  Author: {this.props.authors[0]}
        <button type="button" className="button" onClick={this.handleSearch}>Search</button>
      </div>
    )
  }
})

export default BookSearchResult
