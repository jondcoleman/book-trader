import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Profile from '../components/Profile'

const mapStateToProps = state => ({
  user: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Profile)

export default ProfileContainer
