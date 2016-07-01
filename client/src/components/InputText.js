import React from 'react'

const InputText = (props) => {
  return (<input
    type="text"
    id={props.id}
    value={props.value}
    onChange={props.onchange}
  />)
}

export default InputText
