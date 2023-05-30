import React from 'react';
import './TextField.scss';

const TextField = ({
  label,
  type,
  name,
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} name={name} className="form-control" />
    </div>
  )
}
export default TextField;