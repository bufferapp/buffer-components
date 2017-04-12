import React, { PropTypes } from 'react';
import DayPicker from 'react-day-picker';
import './style.css'; // 'react-day-picker' uses global BEM-like classes

const inThePast = (day) => {
  const now = new Date();
  const isToday = day.toDateString() === now.toDateString();
  return (day < now) && !isToday;
};

const InputDate = ({ input: { value, onChange }, allowSelectPastDays }) =>
  <DayPicker
    disabledDays={allowSelectPastDays ? undefined : inThePast}
    fromMonth={new Date()}
    onDayClick={(day, { disabled }) => {
      if (disabled) return;
      onChange(day);
    }}
    selectedDays={!value ? null : new Date(value)}
  />;

InputDate.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.date,
    onChange: PropTypes.func,
  }),
  allowSelectPastDays: PropTypes.bool,
};

export default InputDate;
