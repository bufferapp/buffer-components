import React, { PropTypes } from 'react';
import DayPicker from 'react-day-picker';
import './style.css'; // 'react-day-picker' uses global BEM-like classes

const inThePast = (day) => {
  const now = new Date();
  const isToday = day.toDateString() === now.toDateString();
  return (day < now) && !isToday;
};

const InputDate = ({ input }) =>
  <span>
    <DayPicker
      disabledDays={inThePast}
      fromMonth={new Date()}
      onDayClick={(day, { disabled }) => {
        if (disabled) return;
        input.onChange(day);
      }}
      selectedDays={input.value}
    />
  </span>;

InputDate.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
};

export default InputDate;
