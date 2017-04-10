import React, { PropTypes } from 'react';
import styles from './style.css'; // 'react-day-picker' uses global BEM-like classes
import DayPicker from 'react-day-picker';

const inThePast = (day) => {
  let now = new Date();
  return day < now;
};

const DateInput = ({
  onChange,
  scheduledAt,
}) =>
  <span>
    <DayPicker
      disabledDays={inThePast}
      fromMonth={new Date()}
      onDayClick={ (day, { disabled }) => {
        if (disabled) return;
        onChange(day);
      }}
      selectedDays={scheduledAt}
    />
  </span>;

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  scheduledAt: PropTypes.instanceOf(Date).isRequired,
};

export default DateInput;
