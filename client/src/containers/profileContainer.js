import { connect } from 'react-redux'
import { updateUser } from '../actions/actionCreators.js'
import Profile from '../components/Profile'
import app from '../feathers-app'

const userService = app.service('users')

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const save = function(details, dispatch){
  userService.patch(details._id, {
    firstName: details.firstName,
    lastName: details.lastName,
    city: details.city,
    state: details.state,
  })
  .then(function(data){
    dispatch(updateUser(data))
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSave: (details) => {
      save(details, dispatch)
    },
    hydrate: (details) => {
      dispatch(updateUser(details))
    }
  }
}

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Profile)

export default ProfileContainer
