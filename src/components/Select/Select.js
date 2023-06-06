import React from 'react';
import './Select.scss';

const Select = ({
  label,
  name,
  options,
  value,
  onChange
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select className="select-control" name={name} value={value} onChange={onChange}>
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