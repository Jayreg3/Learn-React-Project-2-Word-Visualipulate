import React from 'react';

const inputField = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changed} value={props.inputFieldText}></input>
      <p>{props.inputFieldText.length} characters</p>
    </div>
  )
}

export default inputField;
