import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '../lib/utils';

// generate array of numbers (inclusive)
const genArray = (start, end) => [...Array(end + 1).keys()].slice(start);
const leftPadTimeUnit = timeUnit => (timeUnit < 10 ? `0${timeUnit}` : timeUnit);

/* eslint-disable react/prop-types */

const renderAmPm = ({
  disabled,
  noStyle,
  onChange,
  submitting,
  value,
}) => {
  const style = calculateStyles({
    default: {
      marginRight: '0.25rem',
    },
    noStyle: {
      border: 0,
      background: 'transparent',
      margin: 0,
      padding: 0,
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    },
  }, {
    noStyle,
  });

  return (
    <select
      disabled={disabled || submitting}
      onChange={e => onChange({
        ...value,
        hours: e.target.value === 'AM'
        ? parseInt(value.hours, 10) - 12
        : parseInt(value.hours, 10) + 12,
      })}
      style={style}
      value={value.hours < 12 ? 'AM' : 'PM'}
    >
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </select>
  );
};

/* eslint-enable react/prop-types */

const displayHour = (hour, select24Hours) => {
  if (select24Hours) {
    return hour;
  } else if (hour === 0) {
    return 12;
  }
  const modHour = hour % 12;
  return modHour === 0 ? 12 : modHour;
};

const InputTime = ({
  disabled,
  input: {
    value,
    onChange,
  },
  meta: {
    submitting,
  },
  noStyle,
  select24Hours,
}) => {
  const style = calculateStyles({
    default: {
      display: 'inline-flex',
      marginRight: '0.25rem',
    },
    noStyle: {
      border: 0,
      background: 'transparent',
      marginTop: 0,
      marginRight: '0.25rem',
      marginBottom: 0,
      marginLeft: 0,
      padding: 0,
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    },
  }, {
    noStyle,
  });

  if (!value) {
    value = { hours: 0, minutes: 0 };
  }
  return (
    <div style={style}>
      <select
        disabled={disabled || submitting}
        onChange={e => onChange({ ...value, hours: parseInt(e.target.value, 10) })}
        style={style}
        value={value.hours}
      >
        {genArray(
          select24Hours || value.hours < 12 ? 0 : 12,
          select24Hours || value.hours > 11 ? 23 : 11,
        ).map(hour =>
          <option
            key={hour}
            value={hour}
          >
            {leftPadTimeUnit(displayHour(hour, select24Hours))}
          </option>)
        }
      </select>
      <select
        disabled={disabled || submitting}
        onChange={e => onChange({ ...value, minutes: parseInt(e.target.value, 10) })}
        style={style}
        value={value.minutes}
      >
        {genArray(0, 59).map(min =>
          <option key={min} value={min}>{leftPadTimeUnit(min)}</option>)}
      </select>
      { select24Hours ? null : renderAmPm({ disabled, noStyle, onChange, submitting, value }) }
    </div>
  );
};

InputTime.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.shape({
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
      }),
      PropTypes.string,
    ]),
  }).isRequired,
  meta: PropTypes.shape({
    submitting: PropTypes.bool,
  }),
  noStyle: PropTypes.bool,
  select24Hours: PropTypes.bool,
};

InputTime.defaultProps = {
  meta: {},
};

export default InputTime;
