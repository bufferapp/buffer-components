import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import './style.css';
import Text from '../Text';

/* eslint-disable react/prop-types */

const renderError = ({ error, touched }) => (
  error && touched ? (
    <div
      style={{
        marginTop: '1rem',
        textAlign: 'center',
      }}
    >
      <Text color={'torchRed'}>{ error }</Text>
    </div>
  ) : null
);

const disabledDays = ({ disableBefore, submitting }) => {
  if (submitting) {
    return () => true;
  } else if (disableBefore) {
    return {
      before: new Date(disableBefore.year, disableBefore.month, disableBefore.day),
    };
  }
};

/* eslint-enable react/prop-types */


const InputDate = ({
  disableBefore,
  input: {
    value,
    onChange,
  },
  initialMonthYear,
  meta: {
    error,
    touched,
    submitting,
  },
  firstDayOfWeek,
}) =>
  <div>
    <DayPicker
      className={submitting ? 'disabled' : undefined}
      disabledDays={disabledDays({ disableBefore, submitting })}
      initialMonth={new Date(initialMonthYear.year, initialMonthYear.month)}
      onDayClick={(day, { disabled }) => {
        if (!disabled) {
          onChange({
            day: day.getDate(),
            month: day.getMonth(),
            year: day.getFullYear(),
          });
        }
      }}
      selectedDays={!value ? null : new Date(value.year, value.month, value.day)}
      firstDayOfWeek={firstDayOfWeek}
    />
    {renderError({
      error,
      touched,
    })}
  </div>;

InputDate.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.shape({
        day: PropTypes.number,
        month: PropTypes.number,
        year: PropTypes.number,
      }),
      PropTypes.string,
    ]),
    onChange: PropTypes.func,
  }).isRequired,
  initialMonthYear: PropTypes.shape({
    month: PropTypes.number,
    year: PropTypes.number,
  }).isRequired,
  disableBefore: PropTypes.shape({
    month: PropTypes.number,
    year: PropTypes.number,
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
    submitting: PropTypes.bool,
  }),
  firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
};

InputDate.defaultProps = {
  meta: {},
  firstDayOfWeek: 0,
};

export default InputDate;
