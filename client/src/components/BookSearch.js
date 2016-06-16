import React from 'react'
import $ from 'jquery'
import Spinner from './Spinner'
import BookList from './BookList'

const BookSearch = React.createClass({
  getInitialState: function(){
    return {
      searchText: '',
      books: [],
      loading: false
    }
  },
  getBookList: function(text) {
    this.setState({searchText: text})
  },
  handleChange: function(e){
    this.getBookList(e.target.value)
  },
  handleSearch: function(e) {
    e.preventDefault()
    this.setState({books: [], loading: true })
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchText}&maxResults=24`
    $.getJSON(url, function(data) {
//       filter for blank titles and authors
      let filteredItems = data.items.filter(function(item) {
        return item.volumeInfo.title && item.volumeInfo.authors
      })
      let books = filteredItems.map(function(item) {
        let imageUrl = false
        if (item.volumeInfo.imageLinks) {
          imageUrl = item.volumeInfo.imageLinks.smallThumbnail
        }
        let titleArr = item.volumeInfo.title.split(' ')
        let title = titleArr.length < 5 ? titleArr.join(' ') : titleArr.slice(0, 5).join(' ') + '...'
        return {
          title,
          authors: item.volumeInfo.authors,
          id: item.id,
          imageUrl
        }
      })
      this.setState({ books: books, loading: false })
    }.bind(this))
  },
  maybeRenderResults: function(){
    return this.state.books.length > 0 ? <BookList books={this.state.books} action="Add"/> : null
  },
  render: function() {
    return (
      <form onSubmit={this.handleSearch}>
        <div className="row">
          <div className="small-12 medium-10 large-10 columns">
            <input type="text" placeholder="Find a Book to Add to Your Library" onChange={this.handleChange} value={this.state.searchText}/>
          </div>
          <div className="small-12 medium-2 large-2 columns">
            <button type="submit" className="button">Search</button>
          </div>
        </div>
        <Spinner spin={this.state.loading}/>
        {this.maybeRenderResults()}
      </form>

    )
  }
})

export default BookSearch
