import React, { PropTypes } from 'react';
import DayPicker from 'react-day-picker';
import './style.css'; // 'react-day-picker' uses global BEM-like classes

const inThePast = (day) => {
  const now = new Date();
  const isToday = day.toDateString() === now.toDateString();
  return (day < now) && !isToday;
};

const DateInput = ({
  onChange,
  value,
}) =>
  <span>
    <DayPicker
      disabledDays={inThePast}
      fromMonth={new Date()}
      onDayClick={(day, { disabled }) => {
        if (disabled) return;
        onChange(day);
      }}
      selectedDays={value}
    />
  </span>;

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
};

export default DateInput;
