import React from 'react';
import './Select.scss';

const Select = ({
  label,
  name,
  options,
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select className="select-control" name={name}>
        {
          options.map((item, index) => (
            <option value={item.label} key={index}>{item.label}</option>
          ))
        }
      </select>
    </div>
  )
}
export default Select;