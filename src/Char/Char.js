import React from 'react';

const charStyle = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black',
  cursor: 'pointer'
};


const char = (props) => {
  return (
    <div style={charStyle} onClick={props.clicked}>
      <p>{props.text}</p>
    </div>
  )
}

export default char;
