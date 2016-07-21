function trades(state = [], action) {
  switch (action.type) {
    case 'FETCH_TRADES':
      return action.trades
    case 'DELETE_TRADE': {
      const tradeIndex = state.findIndex(trade => trade._id === action.tradeId)
      const newTrades = state.slice()
      newTrades.splice(tradeIndex, 1)
      return newTrades
    }
    default:
      return state
  }
}

export default trades
