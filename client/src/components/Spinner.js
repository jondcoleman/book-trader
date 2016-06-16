import React from 'react'

const Spinner = React.createClass({
  render: function() {
    if (this.props.spin) {
      return (
       <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    )} else {
      return null
    }
  }
})

export default Spinner
