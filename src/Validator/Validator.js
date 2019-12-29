import React from 'react';


const validator = (props) => {
  return (
    <h6>{props.isValidated} : (minimum 5 characters)</h6>
  )
}

export default validator;
