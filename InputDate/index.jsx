import React, { PropTypes } from 'react';
import DayPicker from 'react-day-picker';
import styles from './style.css';
import Text from '../Text';

const inThePast = (day) => {
  const now = new Date();
  const isToday = day.toDateString() === now.toDateString();
  return (day < now) && !isToday;
};

/* eslint-disable react/prop-types */

const renderError = ({ error, touched }) => (
  error && touched ? (
    <div className={styles['error-label']}>
      <Text color={'red'}>{ error }</Text>
    </div>
  ) : null
);

/* eslint-enable react/prop-types */


const InputDate = ({ input: { value, onChange }, allowSelectPastDays, meta }) =>
  <div>
    <DayPicker
      disabledDays={allowSelectPastDays ? undefined : inThePast}
      fromMonth={new Date()}
      onDayClick={(day, { disabled }) => {
        if (!disabled) {
          onChange(day);
        }
      }}
      selectedDays={!value ? null : new Date(value)}
    />
    {renderError(meta)}
  </div>;

InputDate.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.date,
    onChange: PropTypes.func,
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
  allowSelectPastDays: PropTypes.bool,
};

InputDate.defaultProps = {
  meta: {},
};

export default InputDate;
