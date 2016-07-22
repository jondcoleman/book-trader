import React from 'react'

const BookCardButton = (props) => (
  <button
    type="button"
    className={`button ${props.class}`}
    onClick={props.handleClick}
  >{props.label}</button>
)

BookCardButton.propTypes = {
  label: React.PropTypes.string,
  class: React.PropTypes.string,
  handleClick: React.PropTypes.func
}

export default BookCardButton
