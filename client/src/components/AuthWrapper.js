import React from 'react'

const AuthWrapper = (props) => {
  if (props.authenticated) {
    return (
      <div>
        {props.component}
      </div>
    )
  } else {
    return (
      <div>Not Authenticated</div>
    )
  }
}

export default AuthWrapper
