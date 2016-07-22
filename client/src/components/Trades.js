import React from 'react'
import Trade from './Trade'

const Trades = React.createClass({
  propTypes: {
    fetchTrades: React.PropTypes.func,
    myTrades: React.PropTypes.array,
    otherTrades: React.PropTypes.array
  },
  componentDidMount: function() {
    this.props.fetchTrades()
  },
  render: function() {
    const myTrades = this.props.myTrades.map((trade, i) => (
      <Trade
        type="my"
        {...this.props}
        {...trade}
        key={i}
      />)
    )
    const otherTrades = this.props.otherTrades.map((trade, i) => (
      <Trade
        type="other"
        {...this.props}
        {...trade}
        key={i}
      />)
    )
    return (
      <div>
        {otherTrades}
        {myTrades}
      </div>
    )
  }
})

export default Trades
