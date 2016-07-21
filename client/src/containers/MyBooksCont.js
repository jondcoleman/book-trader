import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import MyBooks from '../components/MyBooks'

const mapStateToProps = state => ({
  books: state.books.filter(book => book.userId === state.users._id),
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const MyBooksCont = connect(mapStateToProps, mapDispatchToProps)(MyBooks)

export default MyBooksCont
