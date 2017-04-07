import React, { PropTypes } from 'react';
import styles from './style.css'; // 'react-day-picker' uses global BEM-like classes
import DatePicker from 'react-day-picker';

const DateInput = ({
  datePickerDayModifiers,
  value,
  onChange,
}) =>
  <span>
    <DatePicker
      fromMonth={new Date()}
      modifiers={datePickerDayModifiers}
      onDayClick={onChange}
      //firstDayOfWeek={firstDayOfWeek}
    />
  </span>;

DateInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  datePickerDayModifiers: PropTypes.shape({
    isToday: PropTypes.bool,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
  }),
};

export default DateInput;
