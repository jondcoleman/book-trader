import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Trades from '../components/Trades'

const mapStateToProps = state => {
  return { trades: state.trades }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const TradesCont = connect(mapStateToProps, mapDispatchToProps)(Trades)

export default TradesCont
