import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import AllBooks from '../components/AllBooks'

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, {
    books: state.books.filter(book => book.userId !== state.users._id),
    myBooks: state.books.filter(book => book.userId === state.users._id),
    user: state.users
  }, ownProps)
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const AllBooksCont = connect(mapStateToProps, mapDispatchToProps)(AllBooks)

export default AllBooksCont
