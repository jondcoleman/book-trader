import { connect } from 'react-redux'
import { updateUser } from '../actions'
import Profile from '../components/Profile'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, state)
  return {
    user: state.user
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSave: () => {
      dispatch(updateUser(ownProps.user))
    }
  }
}

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default ProfileContainer
