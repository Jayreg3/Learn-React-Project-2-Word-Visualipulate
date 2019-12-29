import React from 'react';


const validator = (props) => {
  return (
    <p>{props.isValidated} : minimum 5 characters</p>
  )
}

export default validator;
