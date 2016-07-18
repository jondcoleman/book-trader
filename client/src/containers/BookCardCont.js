import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import BookCard from '../components/BookCard'

const mapStateToProps = (state, ownProps) => {
  return ownProps
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const BookCardCont = connect(null, mapDispatchToProps)(BookCard)

export default BookCardCont
