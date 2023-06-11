import React, { useRef } from "react";
import Flatpickr from "react-flatpickr";
import calendarIcon from '../../assets/images/calendar.svg';
import "flatpickr/dist/flatpickr.css";

export default function DatePicker({
  label,
}) {
  const fp = useRef(null);

  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="calendar-control">
        <Flatpickr ref={fp}  />
      </div>
    </div>
  );
}