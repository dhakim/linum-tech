import React from 'react';
import './TextField.scss';

const TextField = ({
  label,
  type,
  name,
  className,
  isDisabled
}) => {
  return (
    <div className={`form-group ${className ? className : ''}`}>
      <label>{label}</label>
      <input type={type} name={name} className="form-control" disabled={isDisabled} />
    </div>
  )
}
export default TextField;