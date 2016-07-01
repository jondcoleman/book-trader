import React from 'react'
import InputText from './InputText'
import feathers from 'feathers-client'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const host = window.location.origin

const app = feathers()
  .configure(feathers.rest(host).fetch(fetch))
  .configure(feathers.hooks())
  .configure(feathers.authentication({ storage: window.localStorage }))

const userService = app.service('users')

const Profile = React.createClass({
  getInitialState: function() {
    return {
      FirstName: '',
      LastName: '',
      City: '',
      State: ''
    }
  },
  componentDidMount: function() {
    app.authenticate()
      .then(res => {
        this.setState({
          id: res.data._id,
          FirstName: res.data.firstName,
          LastName: res.data.lastName,
          City: res.data.city,
          State: res.data.state,
        })
      })
      .catch(err => {
        console.error(err)
      })
  },
  handleInputChange: function(e) {
    const newPropObj = {}
    newPropObj[e.target.id] = e.target.value
    this.setState(newPropObj)
  },
  handleSave: function(e) {
    e.preventDefault()
    userService.patch(this.state.id, {
      firstName: this.state.FirstName,
      lastName: this.state.LastName,
      city: this.state.City,
      state: this.state.State,
    })
  },
  render: function() {
    return (
      <form>
        <div className="row">
          <div className="small-12 medium-6 columns">
            <label>First Name
              <InputText
                id="FirstName"
                value={this.state.FirstName}
                onchange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="small-12 medium-6 columns">
            <label>Last Name
              <InputText
                id="LastName"
                value={this.state.LastName}
                onchange={this.handleInputChange}
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-6 columns">
            <label>City
              <InputText
                id="City"
                value={this.state.City}
                onchange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="small-12 medium-6 columns">
            <label>State
              <InputText
                id="State"
                value={this.state.State}
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
