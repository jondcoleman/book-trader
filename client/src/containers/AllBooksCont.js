import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import AllBooks from '../components/AllBooks'

const mapStateToProps = state => {
  return { books: state.books }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const AllBooksCont = connect(mapStateToProps, mapDispatchToProps)(AllBooks)

export default AllBooksCont
