import React from 'react'
import Main from './Main'
import Spinner from './Spinner'
import AuthWrapper from './AuthWrapper'

const App = React.createClass({
  propTypes: {
    authenticateUser: React.PropTypes.func,
    authPending: React.PropTypes.bool,
    authenticated: React.PropTypes.bool
  },
  componentDidMount: function() {
    this.props.authenticateUser()
  },
  render: function() {
    if (this.props.authPending) return <Spinner spin />
    if (this.props.authenticated) return <Main />
    return <div>Not Authenticated</div>
  }
})

export default App
