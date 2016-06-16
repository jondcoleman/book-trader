import React from 'react'
import Trade from './Trade'

const Trades = React.createClass({
  render: function() {
    trades = trades.map((trade) => {
      let props = trade
      return <Trade {...props} key={Math.random()}/>
    })
    return (
      <div>
        {trades}
      </div>
    )
  }
})

export default Trades
