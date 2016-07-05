import { connect } from 'react-redux'
import { updateUser } from '../actions'
import Profile from '../components/Profile'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSave: (state) => {
      dispatch(updateUser(state))
    }
  }
}

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Profile)

export default ProfileContainer
