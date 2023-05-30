import React from 'react';
import './TextArea.scss';

const TextArea = ({
  label,
  name,
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea name={name} className="text-area"></textarea>
    </div>
  )
}
export default TextArea;