import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from '../components/Main'

const mapStateToProps = state => {
  console.log(state)
  return ({ page: state.page })
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const MainCont = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainCont
