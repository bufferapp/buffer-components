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
import NavBar from './DatepickerNavBar';
import Weekday from './DatepickerWeekday';
import Caption from './DatepickerCaption';
import moment from 'moment';

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

const disabledDays = (initialMonth) => {
  return {
    before: initialMonth,
  }
};

const Datepicker = ({
  firstDayOfWeek,
  firstMonthToDisplay,
  onNavigationClick,
  weekdayLenght,
  date,
  renderDay,
  onDayClick,
  fromMonth,
  initialMonth,
  selectedDays,
}) =>
  <div style={datepickerStyles}>
    <DayPicker
      navbarElement={<NavBar firstMonthToDisplay={firstMonthToDisplay} onNavigationClick={onNavigationClick}/>}
      weekdayElement={<Weekday weekdayLenght={weekdayLenght} />}
      captionElement={<Caption date={date}/>}
      renderDay={renderDay}
      disabledDays={disabledDays(initialMonth)}
      modifiers={modifiers}
      modifiersStyles={modifierStyles}
      fromMonth={firstMonthToDisplay}
      initialMonth={initialMonth}
      onDayClick={onDayClick}
      firstDayOfWeek={firstDayOfWeek}
      selectedDays={selectedDays}
      showOutsideDays
    />
  </div>;

Datepicker.propTypes = {
  firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  firstMonthToDisplay: PropTypes.instanceOf(Date),
  initialMonth: PropTypes.instanceOf(Date),
  onNavigationClick: PropTypes.func,
  weekdayLenght: PropTypes.oneOf(['short', 'medium', 'long']),
  date: PropTypes.instanceOf(Date),
  renderDay: PropTypes.func,
  onDayClick: PropTypes.func,
};

Datepicker.defaultProps = {
  firstDayOfWeek: 0,
  firstMonthToDisplay: moment().toDate(),
  initialMonth: moment().toDate(),
  onNavigationClick: () => {},
  weekdayLenght: 'short',
};

export default Datepicker;
