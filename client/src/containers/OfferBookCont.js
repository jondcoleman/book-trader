import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import OfferBook from '../components/OfferBook'

const mapStateToProps = state => ({
  books: state.books.filter(book => book.userId === state.users._id),
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const OfferBookCont = connect(mapStateToProps, mapDispatchToProps)(OfferBook)

export default OfferBookCont
