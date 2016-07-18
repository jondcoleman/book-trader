function trades(state = [], action) {
  switch (action.type) {
    case 'FETCH_TRADES':
      return action.trades
    default:
      return state
  }
}

export default trades
