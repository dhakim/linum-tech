import React, { useState } from "react";
import DatePicker from "react-datepicker";
import calendarIcon from '../../assets/images/calendar.svg';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerCalendar = ({label}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="calendar-control">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <div className="calendar-icon">
          <img src={calendarIcon} alt="calendar icon" />
        </div>
      </div>
    </div>
  );
};
export default DatePickerCalendar;