import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Trades from '../components/Trades'

const mapStateToProps = state => ({
  myTrades: state.trades.filter(trade => trade.bookOffered.userId === state.users._id),
  otherTrades: state.trades.filter(trade => trade.bookRequested.userId === state.users._id)
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const TradesCont = connect(mapStateToProps, mapDispatchToProps)(Trades)

export default TradesCont
