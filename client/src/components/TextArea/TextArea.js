import React from 'react';
import './TextArea.scss';

const TextArea = ({
  label,
  name,
  onChange
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea name={name} className="text-area" onChange={onChange}></textarea>
    </div>
  )
}
export default TextArea;