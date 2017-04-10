import React, { PropTypes } from 'react';
import styles from './style.css'; // 'react-day-picker' uses global BEM-like classes
import DayPicker from 'react-day-picker';

const inThePast = (day) => {
  const now = new Date();
  const isToday = day.toDateString() === now.toDateString();
  return (day < now) && !isToday;
};

const DateInput = ({
  onChange,
  selectedDay,
}) =>
  <span>
    <DayPicker
      disabledDays={inThePast}
      fromMonth={new Date()}
      onDayClick={ (day, { disabled }) => {
        if (disabled) return;
        onChange(day);
      }}
      selectedDays={selectedDay}
    />
  </span>;

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedDay: PropTypes.instanceOf(Date).isRequired,
};

export default DateInput;
