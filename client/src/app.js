import React from 'react'
import Main from './components/Main'
import Spinner from './components/Spinner'
import AuthWrapper from './components/AuthWrapper'
import app from './feathers-app'

import { connect } from 'react-redux'

import { authenticateUser } from './actions/actionCreators.js'

let App = React.createClass({
  componentDidMount: function() {
    this.props.authenticate()
  },
  render: function() {
    if (this.props.authPending) return <Spinner spin />
    return <AuthWrapper authenticated={this.props.authenticated} component={< Main />} />
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.users.authenticated,
    authPending: state.users.authPending
  }
}

const authenticate = function(dispatch) {
  app.authenticate()
    .then(function(res){
      return dispatch(authenticateUser(true, res.data))
    })
    .catch(function(err){
      return dispatch(authenticateUser(false, {}))
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticate: () => authenticate(dispatch)
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(App)

export default App
