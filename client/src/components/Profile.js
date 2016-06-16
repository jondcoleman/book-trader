import React from 'react'

const Profile = React.createClass({
  getInitialState: function() {
    return {
      something: []
    }
  },
  render: function() {
    return (
      <form>
        <div className="row">
          <div className="small-12 medium-6 columns">
            <label>First Name
              <input type="text"></input>
            </label>
          </div>
          <div className="small-12 medium-6 columns">
            <label>Last Name
              <input type="text"></input>
            </label>
          </div>
        </div>
          <div className="row">
          <div className="small-12 medium-6 columns">
            <label>City
              <input type="text"></input>
            </label>
          </div>
          <div className="small-12 medium-6 columns">
            <label>State
              <input type="text"></input>
            </label>
          </div>
          <div className="small-12 medium-6 columns">
            <button className="button">Save</button>
          </div>
        </div>

      </form>)
  }
})

export default Profile
