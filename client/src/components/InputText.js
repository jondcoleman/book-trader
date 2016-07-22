import React from 'react'

const InputText = (props) => (
  <input
    type="text"
    id={props.id}
    value={props.value}
    onChange={props.onchange}
  />
)

InputText.propTypes = {
  id: React.PropTypes.string,
  value: React.PropTypes.string,
  onchange: React.PropTypes.func
}

export default InputText
