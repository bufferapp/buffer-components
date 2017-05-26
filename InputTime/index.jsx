import React, { PropTypes } from 'react';
import { calculateStyles } from '../lib/utils';

// generate array of numbers (inclusive)
const genArray = (start, end) => [...Array(end + 1).keys()].slice(start);
const leftPadTimeUnit = timeUnit => (timeUnit < 10 ? `0${timeUnit}` : timeUnit);

const style = calculateStyles({
  default: {
    display: 'inline-flex',
  },
});
const minimalStyle = calculateStyles({
  default: {
    border: 0,
    background: 'transparent',
    marginTop: 0,
    marginRight: '0.25rem',
    marginBottom: 0,
    marginLeft: 0,
    padding: 0,
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
  },
});

/* eslint-disable react/prop-types */

const renderAmPm = ({
  minimal,
  onChange,
  submitting,
  value,
}) => (
  <div style={style}>
    { minimal ?
      <select
        disabled={submitting}
        onChange={e => onChange({
          ...value,
          hours: e.target.value === 'AM'
          ? value.hours - 12
          : value.hours + 12,
        })}
        style={minimalStyle}
        value={value.hours < 12 ? 'AM' : 'PM'}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select> :
      <select
        disabled={submitting}
        onChange={e => onChange({
          ...value,
          hours: e.target.value === 'AM'
          ? value.hours - 12
          : value.hours + 12,
        })}
        value={value.hours < 12 ? 'AM' : 'PM'}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    }
  </div>
  );

/* eslint-enable react/prop-types */

const marginRight = {
  marginRight: '0.25rem',
};

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
  input: {
    value,
    onChange,
  },
  meta: {
    submitting,
  },
  minimal,
  select24Hours,
}) => {
  if (!value) {
    value = { hours: 0, minutes: 0 };
  }
  return (
    <div style={style}>
      { minimal ?
        <select
          disabled={submitting}
          onChange={e => onChange({ ...value, hours: parseInt(e.target.value, 10) })}
          style={minimalStyle}
          value={value.hours}
        >
          {genArray(
            select24Hours || value.hours < 12 ? 0 : 12,
            select24Hours || value.hours > 11 ? 23 : 11,
          ).map(hour =>
            (<option
              key={hour}
              value={hour}
            >
              {leftPadTimeUnit(displayHour(hour, select24Hours))}
            </option>))
          }
        </select> :
        <select
          disabled={submitting}
          onChange={e => onChange({ ...value, hours: parseInt(e.target.value, 10) })}
          style={marginRight}
          value={value.hours}
        >
          {genArray(
            select24Hours || value.hours < 12 ? 0 : 12,
            select24Hours || value.hours > 11 ? 23 : 11,
          ).map(hour =>
            (<option
              key={hour}
              value={hour}
            >
              {leftPadTimeUnit(displayHour(hour, select24Hours))}
            </option>))
          }
        </select>
      }
      { minimal ?
        <select
          disabled={submitting}
          onChange={e => onChange({ ...value, minutes: parseInt(e.target.value, 10) })}
          style={!select24Hours ? minimalStyle : undefined}
          value={value.minutes}
        >
          {genArray(0, 59).map(min =>
            <option key={min} value={min}>{leftPadTimeUnit(min)}</option>)}
        </select> :
        <select
          disabled={submitting}
          onChange={e => onChange({ ...value, minutes: parseInt(e.target.value, 10) })}
          style={!select24Hours ? marginRight : undefined}
          value={value.minutes}
        >
          {genArray(0, 59).map(min =>
            <option key={min} value={min}>{leftPadTimeUnit(min)}</option>)}
        </select>
      }
      { select24Hours ? null : renderAmPm({ minimal, onChange, submitting, value }) }
    </div>
  );
};

InputTime.propTypes = {
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
  minimal: PropTypes.bool,
  select24Hours: PropTypes.bool,
};

InputTime.defaultProps = {
  meta: {},
};

export default InputTime;
