import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import App from '../components/App'

const mapStateToProps = state => ({
  authPending: state.users.authPending,
  authenticated: state.users.authenticated
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(App)

export default AppContainer
