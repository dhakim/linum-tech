import React from 'react';
import './TextField.scss';

const TextField = ({
  label,
  type,
  name,
  className,
  isDisabled,
  errorMessage,
  onBlur,
  onChange
}) => {
  return (
    <div className={`form-group ${className ? className : ''}`}>
      <label>{label}</label>
      <input 
        type={type} 
        name={name} 
        className="form-control" 
        disabled={isDisabled} 
        onBlur={onBlur} 
        onChange={onChange}
        autofocus={errorMessage !== null ? true : false}
      />
      {
        errorMessage !== null ? (<div className="error">{errorMessage}</div>) : ''
      }
      
    </div>
  )
}
export default TextField;