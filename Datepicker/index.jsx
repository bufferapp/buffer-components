import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import './style.css';
import Text from '../Text';
import NavBar from './DatepickerNavBar';
import Weekday from './DatepickerWeekday';
import Caption from './DatepickerCaption';
import moment from 'moment';

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

const Datepicker = ({
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
  firstMonthToDisplay,
  onNavigationClick,
  weekdayLenght,
  date,

}) =>
  <div>
    <DayPicker
      navbarElement={<NavBar firstMonthToDisplay={firstMonthToDisplay} onNavigationClick={onNavigationClick}/>}
      weekdayElement={<Weekday weekdayLenght={weekdayLenght} />}
      captionElement={<Caption date={date}/>}
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

Datepicker.propTypes = {
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
  firstMonthToDisplay: PropTypes.instanceOf(Date),
  onNavigationClick: PropTypes.func,
  weekdayLenght: PropTypes.oneOf(['short', 'medium', 'long']),
  date: PropTypes.instanceOf(Date),
};

Datepicker.defaultProps = {
  meta: {},
  firstDayOfWeek: 0,
  firstMonthToDisplay: moment().toDate(),
  onNavigationClick: () => {},
  weekdayLenght: 'short',
};

export default Datepicker;
