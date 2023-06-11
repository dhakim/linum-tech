import React from 'react';
import './TextArea.scss';

const TextArea = ({
  label,
  name,
  onChange,
  onBlur,
  errorMessage
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea 
        name={name} 
        className="text-area" 
        onBlur={onBlur} 
        onChange={onChange}
      ></textarea>
      {
        errorMessage !== null ? (<div className="error">{errorMessage}</div>) : ''
      }
    </div>
  )
}
export default TextArea;