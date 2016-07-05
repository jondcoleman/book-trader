import React from 'react'
import InputText from './InputText'
import Spinner from '../components/Spinner'


const Profile = React.createClass({
  getInitialState: function() {
    return { user: this.props.user || {} }
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({ user: nextProps.user || {}})
  },
  handleInputChange: function(e) {
    const newPropObj = Object.assign({}, this.state.user)
    newPropObj[e.target.id] = e.target.value
    this.setState({ user: newPropObj })
  },
  handleSave: function(e) {
    e.preventDefault()
    return this.props.handleSave(this.state.user)
  },
  render: function() {
    return (
      <form>
        <div className="row">
          <div className="small-12 medium-6 columns">
            <label>First Name
              <InputText
                id="firstName"
                value={this.state.user.firstName}
                onchange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="small-12 medium-6 columns">
            <label>Last Name
              <InputText
                id="lastName"
                value={this.state.user.lastName}
                onchange={this.handleInputChange}
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-6 columns">
            <label>City
              <InputText
                id="city"
                value={this.state.user.city}
                onchange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="small-12 medium-6 columns">
            <label>State
              <InputText
                id="state"
                value={this.state.user.state}
                onchange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="small-12 medium-6 columns">
            <button className="button" onClick={this.handleSave}>Save</button>
          </div>
        </div>

      </form>)
  }
})

export default Profile
