import React from 'react'
import Trade from './Trade'

const Trades = React.createClass({
  componentDidMount: function() {
    this.props.fetchTrades()
  },
  render: function() {
    console.log(this.props)
    const trades = this.props.trades.map((trade) => {
      let props = trade
      return <Trade {...props} key={Math.random()} />
    })
    return (
      <div>
        {trades}
      </div>
    )
  }
})

export default Trades
