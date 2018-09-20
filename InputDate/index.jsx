import React from 'react';
import PropTypes from 'prop-types';
import {
  fontFamily,
  fontSizeMini,
} from '../style/font';
import {
  white,
  curiousBlue,
  outerSpace,
} from '../style/color';
import DayPicker from 'react-day-picker';
import NavBar from './InputDateNavBar';
import Weekday from './InputDateWeekday';
import Caption from './InputDateCaption';
import Text from '../Text';
import moment from 'moment';

/* eslint-disable react/prop-types */
const datepickerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  position: 'relative',
  userSelect: 'none',
  fontFamily: fontFamily,
  minWidth: '336px',
};

const modifierStyles = {
  cell: {
    display: 'inline-block',
    padding: '.6rem 0rem',
    width: '3rem',
    textAlign: 'center',
    cursor: 'pointer',
    verticalAlign: 'middle',
    overflow: 'hidden',
    color: 'black',
    fontSize: fontSizeMini,
    border: '0.5px solid #eff1f1',
    outline: '0.5px solid #eff1f1',
    boxSizing: 'border-box',
  },
  today: {
    color: curiousBlue,
  },
  outside: {
    color: '#dce0e0',
    cursor: 'default',
  },
  disabled: {
    color: '#dce0e0',
    cursor: 'default',
    backgroundColor: '#f8f8f8',
  },
  selected: {
    color: white,
    backgroundColor: outerSpace,
    border: 'none',
    outline: 'none',
  }
};

const modifiers = {
  cell: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
};

const renderError = ({ error, touched }) => (
  error && touched ? (
    <div
      style={{
        marginTop: '1rem',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Text color={'torchRed'}>{ error }</Text>
    </div>
  ) : null
);

const disabledDays = ({ disableBefore, submitting }, initialMonth) => {
  if (submitting) {
    return () => true;
  } else if (disableBefore) {
    return {
      before: new Date(disableBefore.year, disableBefore.month, disableBefore.day),
    };
  } else {
    return {
      before: initialMonth,
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
  firstMonthToDisplay,
  onNavigationClick,
  weekdayLenght,
  date,
  renderDay,
  onDayClick,
  selectedDays,
  initialMonth,
}) =>
  <div style={datepickerStyles}>
    <DayPicker
      navbarElement={<NavBar firstMonthToDisplay={firstMonthToDisplay} onNavigationClick={onNavigationClick}/>}
      weekdayElement={<Weekday weekdayLenght={weekdayLenght} />}
      captionElement={<Caption date={date}/>}
      className={submitting ? 'disabled' : undefined}
      disabledDays={disabledDays({ disableBefore, submitting }, initialMonth)}
      fromMonth={firstMonthToDisplay}
      initialMonth={initialMonthYear? new Date(initialMonthYear.year, initialMonthYear.month) : initialMonth}
      renderDay={renderDay}
      modifiers={modifiers}
      modifiersStyles={modifierStyles}
      showOutsideDays
      onDayClick={(day, { disabled }) => {onDayClick}}
      selectedDays={selectedDays}
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
  firstMonthToDisplay: PropTypes.instanceOf(Date),
  initialMonth: PropTypes.instanceOf(Date),
  onNavigationClick: PropTypes.func,
  weekdayLenght: PropTypes.oneOf(['short', 'medium', 'long']),
  date: PropTypes.instanceOf(Date),
  renderDay: PropTypes.func,
  onDayClick: PropTypes.func,
};

InputDate.defaultProps = {
  meta: {},
  firstDayOfWeek: 0,
  firstMonthToDisplay: moment().toDate(),
  onNavigationClick: () => {},
  weekdayLenght: 'short',
};

export default InputDate;
